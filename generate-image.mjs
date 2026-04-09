import * as fs from "node:fs";
import * as path from "node:path";
import "dotenv/config";

const ASSETS_DIR = path.resolve("src/assets/images");
const API_KEY = process.env.OPENROUTER_API_KEY;

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

/**
 * Generate an image using OpenRouter API (Gemini Flash image generation)
 *
 * @param {string} prompt - Text description of the image to generate
 * @param {string} filename - Output filename (without extension)
 * @param {object} options
 * @param {string} options.model - OpenRouter model ID
 */
export async function generateImage(prompt, filename, options = {}) {
  const { model = "google/gemini-2.5-flash-image" } = options;

  console.log(`Generating: "${prompt}"`);
  console.log(`Model: ${model}`);

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://futureofSports.ai",
      "X-Title": "FSP Image Generator",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      // Request image output
      response_format: { type: "image" },
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`API error ${response.status}: ${errBody}`);
  }

  const data = await response.json();

  const outputPath = path.join(ASSETS_DIR, `${filename}.png`);
  const msg = data.choices?.[0]?.message;
  const content = msg?.content;
  const images = msg?.images;

  // Check msg.images array (OpenRouter Gemini format)
  if (Array.isArray(images)) {
    for (const img of images) {
      const url = img?.image_url?.url || img?.url;
      if (url?.startsWith("data:image")) {
        const base64 = url.split(",")[1];
        fs.writeFileSync(outputPath, Buffer.from(base64, "base64"));
        console.log(`Saved: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(0)}KB)`);
        return outputPath;
      }
      if (url) {
        const imgResp = await fetch(url);
        const buffer = Buffer.from(await imgResp.arrayBuffer());
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(0)}KB)`);
        return outputPath;
      }
    }
  }

  // Check if content is a data URI string
  if (typeof content === "string" && content.startsWith("data:image")) {
    const base64 = content.split(",")[1];
    fs.writeFileSync(outputPath, Buffer.from(base64, "base64"));
    console.log(`Saved: ${outputPath}`);
    return outputPath;
  }

  // Check content array for image parts
  if (Array.isArray(content)) {
    for (const part of content) {
      if (part.type === "image_url") {
        const url = part.image_url?.url || part.url;
        if (url?.startsWith("data:image")) {
          const base64 = url.split(",")[1];
          fs.writeFileSync(outputPath, Buffer.from(base64, "base64"));
          console.log(`Saved: ${outputPath}`);
          return outputPath;
        }
      }
    }
  }

  console.error("Full API response:", JSON.stringify(data, null, 2).slice(0, 500));
  throw new Error("No image was returned by the API");
}

// --- CLI usage ---
const args = process.argv.slice(2);

if (args.length >= 2) {
  const [prompt, filename, model] = args;
  generateImage(prompt, filename, {
    ...(model && { model }),
  }).catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
} else if (args.length > 0) {
  console.error('Usage: node generate-image.mjs "<prompt>" "<filename>" [model]');
  process.exit(1);
}

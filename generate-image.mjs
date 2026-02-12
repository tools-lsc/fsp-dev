import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";
import "dotenv/config";

const ASSETS_DIR = path.resolve("src/assets/images");

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Generate an image using NanoBanana (Gemini) API
 *
 * @param {string} prompt - Text description of the image to generate
 * @param {string} filename - Output filename (without extension)
 * @param {object} options
 * @param {"gemini-2.5-flash-image"|"gemini-3-pro-image-preview"} options.model
 * @param {"1:1"|"2:3"|"3:2"|"3:4"|"4:3"|"4:5"|"5:4"|"9:16"|"16:9"|"21:9"} options.aspectRatio
 */
export async function generateImage(prompt, filename, options = {}) {
  const {
    model = "gemini-2.5-flash-image",
    aspectRatio = "16:9",
  } = options;

  console.log(`Generating: "${prompt}"`);
  console.log(`Model: ${model} | Aspect Ratio: ${aspectRatio}`);

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseModalities: ["TEXT", "IMAGE"],
      ...(aspectRatio && { aspectRatio }),
    },
  });

  const outputPath = path.join(ASSETS_DIR, `${filename}.png`);

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log("AI notes:", part.text);
    } else if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, "base64");
      fs.writeFileSync(outputPath, buffer);
      console.log(`Saved: ${outputPath}`);
      return outputPath;
    }
  }

  throw new Error("No image was returned by the API");
}

// --- CLI usage ---
const args = process.argv.slice(2);

if (args.length >= 2) {
  const [prompt, filename, model, aspectRatio] = args;
  generateImage(prompt, filename, {
    ...(model && { model }),
    ...(aspectRatio && { aspectRatio }),
  }).catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
} else if (args.length > 0) {
  console.error("Usage: node generate-image.mjs <prompt> <filename> [model] [aspectRatio]");
  process.exit(1);
}

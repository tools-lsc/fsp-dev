# FSP Website — March 19, 2026 Update

## Changes since last pull

### Partners Page (enterprise.html → partners.html)


**Hero Section**
- Updated H1 to "Where Kinetic Truth™ Meets Brand Velocity."
- Updated subtitle copy
- Added two overlay boxes (Movement Creators / Movement Buyers) with icons, descriptions, and green checkmark lists on the blue hero background

**Select Your Path (new section)**
- Replaced the old tabbed Problem/Solution layout with a clean path selector
- Individual path: featured blue card with "Start your arena" link and "Start Earning" CTA
- Leagues, Schools, Software, Venues: stacked rows with icons, descriptions, "Contact Sales" + "Create Arena" CTAs

**Arena Pool Earnings (replaced Rewards Calculator)**
- Replaced the continuous slider with a stepped slider (7 fixed stops: 1K, 5K, 10K, 25K, 50K, 100K, 1M)
- Displays Participants count and Arena Pool value (gold #D4A843) dynamically
- Disclaimer updated per PDF specs

**Campaign Manager**
- Step 1 renamed to "Choose Your Arena"
- "Pool Picker" → "Arena Picker" with updated description
- "Create Ad" CTA added between Campaign Manager and next section

**Sections Removed**
- "AI Vision Live — Verification in motion" section removed
- "Buy Real Results. Not Impressions" (Movement Buyers) section removed
- "You Are Always in Control" dashboard section hidden (display:none)

**Launch Your Arena on FSP (replaced SDK section)**
- New title, subtitle, and 4 feature bullet points with green checkmarks
- Proper typography hierarchy (bold labels, lighter descriptions)
- CTAs: "Launch an Arena" + "Contact Sales"

**FAQ Updates**
- Updated answers for: AI verification, Bounty definition, Venue benefits
- Removed "Can I integrate FSP into my existing app?" item

**File Rename**
- `enterprise.html` → `partners.html` (enterprise.html now redirects)

---

### Home Page (index.html)

**Video Cards Section**
- Redesigned from 2×2 grid to 1×4 horizontal grid
- Each card: vertical 9:16 video with rounded corners, headline below, blue pill CTA
- Videos trimmed to max 15 seconds, converted to h264 mp4, set to autoplay loop
- New video files in `src/assets/videos/`

**Explore Tiers Popup**
- Title updated to "Turn Your Play into Income — Multiply What You Earn"
- Card 1 (Free): new benefits list + callout about automatic performance payouts
- Card 2 (Pro Pass): replaces "Member" — Arena Majors, Championship Finals, draft visibility
- Card 3 (Movement Creator): arena-focused language, creator revenue share
- Each card now has a highlighted callout box

---

### Footer (all 10 pages)
- Tagline changed from "Fair. Open. Rewarding." to "Kinetic Truth Engine™"
- Email newsletter signup form removed (was non-functional)

### Clean URLs (all pages)
- All internal `.html` extensions removed from links
- `enterprise.html` references → `partners`
- `index.html` references → `/`

### Terms & Conditions
- `terms-of-use.html` and `terms-and-conditions.html` added
- Footer links updated to point to these pages

### New Files
- `partners.html` — renamed partners page
- `terms-of-use.html` — Terms of Use / User Agreement
- `terms-and-conditions.html` — Website Terms and Conditions
- `src/assets/videos/card-1.mp4` through `card-4.mp4` — trimmed vertical videos

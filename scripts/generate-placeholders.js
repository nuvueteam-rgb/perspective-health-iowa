/**
 * Script to generate placeholder images for development.
 * Run: node scripts/generate-placeholders.js
 *
 * In production, replace these with actual photography.
 * Recommended image dimensions:
 * - Hero: 1920x1080
 * - Welcome/About: 800x600
 * - Service: 600x400
 * - Provider: 600x450
 * - Blog: 1200x630
 * - OG: 1200x630
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const placeholders = [
  // Hero & main
  { path: "public/images/hero-bg.jpg", w: 1920, h: 1080, text: "Hero+Background", bg: "2C2C2C" },
  { path: "public/images/og-default.jpg", w: 1200, h: 630, text: "Perspective+Health+Iowa", bg: "00B5B8" },
  { path: "public/images/about-clinic.jpg", w: 800, h: 600, text: "Our+Clinic", bg: "E8F0E9" },
  // Welcome
  { path: "public/images/welcome-1.jpg", w: 800, h: 600, text: "Patient+Consultation", bg: "00B5B8" },
  { path: "public/images/welcome-2.jpg", w: 600, h: 400, text: "Care+Team", bg: "7B4F9E" },
  // Approach
  { path: "public/images/approach-1.jpg", w: 600, h: 800, text: "Provider+Consult", bg: "5BAD6F" },
  { path: "public/images/approach-2.jpg", w: 600, h: 800, text: "Integrative+Care", bg: "00B5B8" },
  // Services
  { path: "public/images/service-primary-care.jpg", w: 600, h: 400, text: "Primary+Care", bg: "00B5B8" },
  { path: "public/images/service-hormone-health.jpg", w: 600, h: 400, text: "Hormone+Health", bg: "7B4F9E" },
  { path: "public/images/service-integrative-medicine.jpg", w: 600, h: 400, text: "Functional+Medicine", bg: "5BAD6F" },
  { path: "public/images/service-digestive-metabolic.jpg", w: 600, h: 400, text: "Digestive+Health", bg: "00B5B8" },
  { path: "public/images/service-supplementary.jpg", w: 600, h: 400, text: "Supplementary", bg: "7B4F9E" },
  // Providers
  { path: "public/images/audrey-gries.jpg", w: 600, h: 450, text: "Audrey+Gries+PA-C", bg: "00B5B8" },
  { path: "public/images/stephanie-erdmann.jpg", w: 600, h: 450, text: "Stephanie+Erdmann+DNP", bg: "7B4F9E" },
  { path: "public/images/tara-sayer.jpg", w: 600, h: 450, text: "Tara+Sayer+RN", bg: "5BAD6F" },
  // Insurance logos (simple colored boxes)
  { path: "public/images/insurance-wellmark.png", w: 300, h: 100, text: "Wellmark+BCBS", bg: "003087" },
  { path: "public/images/insurance-optum.png", w: 300, h: 100, text: "Optum+UHC", bg: "0071CE" },
  { path: "public/images/insurance-midlandschoice.png", w: 300, h: 100, text: "MidlandsChoice", bg: "005B99" },
  { path: "public/images/insurance-medicare.png", w: 300, h: 100, text: "Medicare", bg: "C10230" },
  { path: "public/images/insurance-aetna.png", w: 300, h: 100, text: "Aetna", bg: "7B2D8B" },
  { path: "public/images/insurance-cigna.png", w: 300, h: 100, text: "Cigna", bg: "007FAD" },
  // Blog
  { path: "public/images/blog-default.jpg", w: 1200, h: 630, text: "Blog+Article", bg: "00B5B8" },
  { path: "public/images/blog/integrative-medicine.jpg", w: 1200, h: 630, text: "Integrative+Medicine", bg: "5BAD6F" },
  { path: "public/images/blog/hormone-health.jpg", w: 1200, h: 630, text: "Hormone+Health", bg: "7B4F9E" },
];

async function downloadPlaceholder({ path: filePath, w, h, text, bg }) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    console.log(`  ✓ Exists: ${filePath}`);
    return;
  }

  const url = `https://placehold.co/${w}x${h}/${bg}/FFFFFF/png?text=${text}`;

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`  ✓ Created: ${filePath}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {});
        console.error(`  ✗ Error: ${filePath}`, err.message);
        reject(err);
      });
  });
}

async function main() {
  console.log("Generating placeholder images...\n");
  for (const placeholder of placeholders) {
    await downloadPlaceholder(placeholder);
  }
  console.log("\nDone! Replace these with real photography before launch.");
}

main().catch(console.error);

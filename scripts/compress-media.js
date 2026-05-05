import sharp from "sharp";
import { execSync } from "child_process";
import { existsSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function sizeMB(p) {
  return (statSync(p).size / (1024 * 1024)).toFixed(1) + " MB";
}

/* ── Images ── */
const images = ["pinball-01.jpg", "pinball-02.jpg"];

for (const img of images) {
  const src = join(root, "public/images", img);
  if (!existsSync(src)) continue;

  const before = statSync(src).size;
  const webpName = img.replace(/\.\w+$/, ".webp");
  const dest = join(root, "public/images", webpName);

  await sharp(src)
    .webp({ quality: 80 })
    .toFile(dest);

  const after = statSync(dest).size;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`  ${img}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (${pct}%)`);
}

/* ── Videos ── */
// Use npx to locate ffmpeg from @ffmpeg-installer
let ffmpeg = "ffmpeg";
try {
  const ffmpegInstaller = await import("@ffmpeg-installer/ffmpeg");
  ffmpeg = ffmpegInstaller.default.path;
} catch {
  console.log("  Using system ffmpeg");
}

const videos = [
  { name: "amadeus-demo.mp4", crf: 30 },
  { name: "pinball-demo.mp4", crf: 28 },
];

for (const { name, crf } of videos) {
  const src = join(root, "public/videos", name);
  if (!existsSync(src)) continue;

  const beforeSize = sizeMB(src);
  const tmp = src.replace(".mp4", "-c.mp4");

  console.log(`\n  Compressing ${name} (${beforeSize})...`);
  try {
    execSync(
      `${ffmpeg} -i "${src}" -c:v libx264 -crf ${crf} -preset fast -c:a aac -b:a 64k -movflags +faststart -y "${tmp}"`,
      { stdio: "inherit" }
    );

    // Replace original with compressed
    const { renameSync } = await import("fs");
    renameSync(tmp, src);
    console.log(`  Done: ${beforeSize} → ${sizeMB(src)}`);
  } catch (e) {
    console.error(`  Failed to compress ${name}: ${e.message}`);
  }
}

console.log("\n✓ Compression complete");

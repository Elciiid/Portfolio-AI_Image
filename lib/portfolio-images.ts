import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export interface PortfolioImage {
  src: string;
  alt: string;
}

// Every image in public/ai-imagery/, sorted by file name. The first three also
// fill the hero panels. Alt text comes from the file name:
// "02-engraved-gold-band-amber-bokeh.jpg" -> "Engraved gold band amber bokeh".
// Server-only: reads the filesystem at build/request time.
export function listPortfolioImages(): PortfolioImage[] {
  const dir = path.join(process.cwd(), "public", "ai-imagery");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const words = path
        .basename(file, path.extname(file))
        .replace(/^\d+[-_ ]*/, "")
        .replace(/[-_]+/g, " ")
        .trim();
      const alt = words ? words.charAt(0).toUpperCase() + words.slice(1) : "Portfolio image";
      return { src: `/ai-imagery/${file}`, alt };
    });
}

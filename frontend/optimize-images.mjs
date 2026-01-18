import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageDir = path.join(__dirname, 'public/images');
const tempDir = path.join(__dirname, '.temp');

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const files = fs.readdirSync(imageDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(imageDir, file);
    const tempPath = path.join(tempDir, file);
    const originalSize = fs.statSync(inputPath).size / 1024 / 1024;

    try {
      await sharp(inputPath)
        .resize(1200, 1600, {
          fit: 'cover',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 70, progressive: true })
        .toFile(tempPath);

      fs.copyFileSync(tempPath, inputPath);
      fs.unlinkSync(tempPath);

      const newSize = fs.statSync(inputPath).size / 1024 / 1024;
      console.log(`✓ ${file}: ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }
  
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('Optimization complete!');
}

optimizeImages();

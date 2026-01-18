import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageDir = path.join(__dirname, 'public/images');

const files = fs.readdirSync(imageDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

async function optimizeImages() {
  for (const file of files) {
    const filePath = path.join(imageDir, file);
    const originalSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);

    try {
      await sharp(filePath)
        .resize(1200, 1600, { fit: 'cover', withoutEnlargement: true })
        .jpeg({ quality: 65, progressive: true })
        .toBuffer()
        .then(data => {
          fs.writeFileSync(filePath, data);
          const newSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
          console.log(`✓ ${file}: ${originalSize}MB → ${newSize}MB`);
        });
    } catch (error) {
      console.error(`✗ ${file}:`, error.message);
    }
  }
}

optimizeImages();

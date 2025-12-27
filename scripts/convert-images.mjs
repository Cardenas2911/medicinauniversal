
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public', 'images');
const images = ['hero-bg.jpg', 'logo.jpg', 'feature-plant.jpg', 'info-image.jpg'];

async function convertImages() {
    for (const image of images) {
        const inputPath = path.join(publicDir, image);
        const outputPath = path.join(publicDir, image.replace('.jpg', '.webp'));

        if (fs.existsSync(inputPath)) {
            console.log(`Converting ${image} to WebP...`);
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Created ${outputPath}`);
        } else {
            console.warn(`Source image not found: ${inputPath}`);
        }
    }
}

convertImages().catch(console.error);

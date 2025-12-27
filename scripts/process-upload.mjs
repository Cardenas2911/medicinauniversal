
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadedPath = 'C:/Users/User/.gemini/antigravity/brain/7fe5eede-e168-41b9-9f67-b0560cf8bd57/uploaded_image_1766822570434.png';
const publicDir = path.join(process.cwd(), 'public', 'images');
const outputPath = path.join(publicDir, 'yage-plant.webp');

async function processImage() {
    if (fs.existsSync(uploadedPath)) {
        console.log(`Processing ${uploadedPath}...`);
        await sharp(uploadedPath)
            .webp({ quality: 90 })
            .toFile(outputPath);
        console.log(`Created ${outputPath}`);
    } else {
        console.error(`Source file not found: ${uploadedPath}`);
    }
}

processImage().catch(console.error);

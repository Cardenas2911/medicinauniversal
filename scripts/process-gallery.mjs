
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:/Users/User/.gemini/antigravity/brain/7fe5eede-e168-41b9-9f67-b0560cf8bd57';
const publicDir = path.join(process.cwd(), 'public', 'images', 'gallery');

// Ensure gallery dir exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Map of uploaded filenames to desired output names
const images = [
    // Batch 1 (Already processed, but keeping for completeness if needed)
    { src: 'uploaded_image_0_1766824683496.jpg', dest: 'gallery-flyer.webp' },
    { src: 'uploaded_image_1_1766824683496.jpg', dest: 'gallery-couple.webp' },
    { src: 'uploaded_image_2_1766824683496.jpg', dest: 'gallery-ceremony.webp' },
    { src: 'uploaded_image_3_1766824683496.jpg', dest: 'gallery-reading.webp' },
    { src: 'uploaded_image_4_1766824683496.jpg', dest: 'gallery-nature-river.webp' },
    // Batch 2 (New)
    { src: 'uploaded_image_0_1766824734098.jpg', dest: 'gallery-shaman-sun.webp' },
    { src: 'uploaded_image_1_1766824734098.png', dest: 'gallery-sunset-group.webp' },
    { src: 'uploaded_image_2_1766824734098.png', dest: 'gallery-silhouette-leaf.webp' }
];

async function processImages() {
    for (const img of images) {
        const srcPath = path.join(brainDir, img.src);
        const destPath = path.join(publicDir, img.dest);

        if (fs.existsSync(srcPath)) {
            console.log(`Processing ${img.src} -> ${img.dest}`);
            await sharp(srcPath)
                .webp({ quality: 85 })
                .toFile(destPath);
        } else {
            // Silently skip missing files (likely already processed or deleted from temp)
        }
    }
}

processImages().catch(console.error);

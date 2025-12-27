import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2099&auto=format&fit=crop';
const filename = 'about-main.jpg';

const downloadImage = async (url, filepath) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(filepath, Buffer.from(buffer));
        console.log(`Downloaded: ${filepath}`);
    } catch (error) {
        console.error(`Error downloading ${url}:`, error.message);
    }
};

const main = async () => {
    const imagesDir = path.join(__dirname, '..', 'public', 'images');
    const filepath = path.join(imagesDir, filename);
    await downloadImage(url, filepath);
};

main();

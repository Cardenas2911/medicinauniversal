import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    {
        url: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop',
        filename: 'about-main.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974&auto=format&fit=crop',
        filename: 'about-secondary-1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop',
        filename: 'about-secondary-2.jpg'
    },
    {
        url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        filename: 'avatar-felix.svg'
    }
];

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

    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Using Promise.all for parallel downloads
    await Promise.all(images.map(img => {
        const filepath = path.join(imagesDir, img.filename);
        return downloadImage(img.url, filepath);
    }));

    console.log('Finished processing images.');
};

main();

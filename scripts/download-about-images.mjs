import fs from 'fs';
import path from 'path';
import https from 'https';
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

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${filepath}`);
                    resolve();
                });
            } else if (res.statusCode === 301 || res.statusCode === 302) {
                // Handle redirects
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            } else {
                reject(new Error(`Failed to download ${url}, status code: ${res.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
};

const main = async () => {
    const imagesDir = path.join(__dirname, '..', 'public', 'images');

    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    try {
        for (const img of images) {
            const filepath = path.join(imagesDir, img.filename);
            await downloadImage(img.url, filepath);
        }
        console.log('All images downloaded successfully.');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
};

main();

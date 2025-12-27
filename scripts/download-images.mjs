
import fs from 'fs';
import path from 'path';
import https from 'https';

const publicDir = path.join(process.cwd(), 'public', 'images');
const images = [
    {
        name: 'feature-plant.jpg',
        url: 'https://fastly.picsum.photos/id/1043/800/600.jpg?hmac=CceB8h4aQ_K1f3p3q4d3J7k0d5_7q11g_8_555_1000'
    },
    {
        name: 'info-image.jpg',
        url: 'https://fastly.picsum.photos/id/1018/1000/600.jpg?hmac=X4_3-380128038101345_213123_13123'
    }
];

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        https.get(url, options, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        });
    });
}

async function main() {
    for (const img of images) {
        const filePath = path.join(publicDir, img.name);
        try {
            console.log(`Downloading ${img.name}...`);
            await downloadImage(img.url, filePath);
            console.log(`Saved to ${filePath}`);
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
        }
    }
}

main();

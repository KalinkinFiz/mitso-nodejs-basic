import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {

    let file = 'files/fileToCalculateHashFor.txt';
    let exists = fs.existsSync(file);
    if (!exists) {
        throw new Error('FS operation failed');
    }
    let data = fs.readFileSync(file, 'utf8');
    let hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
};

await calculateHash();
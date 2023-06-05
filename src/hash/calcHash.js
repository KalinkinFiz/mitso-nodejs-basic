import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const filePath = './src/hash/files/fileToCalculateHashFor.txt';

  try {
    const fileContent = await fs.promises.readFile(filePath, { encoding: 'utf8' });
    const hash = crypto.createHash('sha256').update(fileContent).digest('hex');
    console.log(`SHA256 hash for file ${filePath} is ${hash}`);
    return hash;
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();

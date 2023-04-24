import { promises } from 'fs';

const rename = async () => {
    try {
        const source = './files/wrongFilename.txt';
        const dest = './files/properFilename.md';
        const sourceExists = await promises.access(source).then(() => true).catch(() => false);
        const destExists = await promises.access(dest).then(() => true).catch(() => false);
        
        if (sourceExists && destExists) {
          throw new Error('FS operation failed: Both source and destination files already exist.');
        } else if (sourceExists) {
          await promises.rename(source, dest);
          console.log('File successfully renamed.');
        } else {
          throw new Error(`FS operation failed: ${source} does not exist.`);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
await rename();
import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
    
const dirname = url.fileURLToPath(new URL(".", import.meta.url));
    
const rename = async () => {
    try{
        await fs.rename(path.resolve(dirname,'files','wrongFilename.txt'), path.resolve(dirname,'files','properFilename.md'), (err) => {
            if(err) throw err;
            console.log('Rename completed');
        });
    }
    catch(err){
        console.log("FS operation failed")
    }
};

await rename();
import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
    try{
        await fs.cp(`${path.resolve(dirname, 'files')}`,`${path.resolve(dirname, 'files_copy')}`,{
            recursive : true,
            force: false,
            errorOnExist : true
        });
        console.log('Files have successfully been copied')
    }
    catch(err){
        console.log('FS operation failed');
    }
};

await copy();

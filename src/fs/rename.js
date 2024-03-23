import fs from 'fs';

const rename = async () => {
    let oldName = 'files/wrongFilename.txt';
    let newName = 'files/properFilename.md';
    let oldExists = fs.existsSync(oldName);
    let newExists = fs.existsSync(newName);
    if (!oldExists || newExists) {
        throw new Error('FS operation failed');
    }
    fs.rename(oldName, newName, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File renamed');
        }
    });
};

await rename();
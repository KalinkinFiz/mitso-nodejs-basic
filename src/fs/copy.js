import fs from 'fs';

const copy = async () => {
    let copyDir = 'files';
    let newDir = 'files_copy';
    let copyExists = fs.existsSync(copyDir);
    let newExists = fs.existsSync(newDir);
    if (!copyExists || newExists) {
        throw new Error('FS operation failed');
    }
    fs.mkdir(newDir, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Directory created');
        }
    });
    let files = fs.readdirSync(copyDir);
    files.forEach((file) => {
        fs.copyFileSync(`${copyDir}/${file}`, `${newDir}/${file}`);
    });
    console.log('Files copied');
};

await copy();

import fs from 'fs';

const create = async () => {
    // Write your code here
    console.log('Create file');
    let file = 'files/fresh.txt';
    let data = 'I am frash and young';
    let exists = fs.existsSync(file);
    if (exists) {
        throw new Error('FS operation failed');
    }
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created');
        }
    });
};

await create();
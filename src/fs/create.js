import fs from 'fs'
const create = async () => {
    try {
        await fs.promises.open('files/fresh.txt')
        console.log('FS operation failed')
    } catch (e) {
        await fs.promises.writeFile('files/fresh.txt', 'I am fresh and young')
    }
};

await create();
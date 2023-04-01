import {readFile} from 'fs/promises'

const read = async () => {
    const file = "files/fileToRead.txt"
    try {
        const content = await readFile(file, {encoding: 'utf-8'})
        console.log(content)
    } catch (e) {
        console.error("FS operation failed")
    }
};

await read();

import fs from 'fs'

const remove = async () => {
    const file = "files/fileToRemove.txt"
    try {
        await fs.promises.access(file)
        await fs.promises.rm(file)
    } catch (e) {
        console.error("FS operation failed")
    }
};

await remove();

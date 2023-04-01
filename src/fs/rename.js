import fs from 'fs'

const rename = async () => {
    const src = "files/wrongFilename.txt"
    const dest = "files/properFilename.md"
    // const src = "files/properFilename.md"
    // const dest = "files/wrongFilename.txt"
    try {
        await fs.promises.access(src)
        try {
            await fs.promises.access(dest)
            console.error("FS operation failed")
        } catch (e) {
            await fs.promises.rename(src, dest)
        }
    } catch (e) {
        console.error("FS operation failed")
    }
};

await rename();

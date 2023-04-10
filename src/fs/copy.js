import fs from 'fs'
const copy = async () => {
    try {
        await fs.promises.opendir('files_copy')
        console.error('FS operation failed')
    } catch (e) {
        try {
            await fs.promises.mkdir('files_copy')
            await fs.promises.cp('files', 'files_copy', { recursive: true })
        } catch (e) {
            console.error('FS operation failed')
        }
    }
};

await copy();

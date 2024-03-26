import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    try{
        const files = await fs.readdir(path.join(__dirname, 'files'));

        if (files.includes("xd.txt")) {

            console.log(await fs.readFile(path.join(__dirname, 'files', "xd.txt"), 'utf-8', {
                flag: "wx"
            }));
        }
        else
            throw new Error("Файл не существует")

    }catch (err) {
        console.log(err.message);
    }
};

await read();
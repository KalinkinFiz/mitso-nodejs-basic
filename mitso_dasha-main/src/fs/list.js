import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    try{
        const files = await fs.readdir(path.join(__dirname, 'files'));

        if(files) {

            await fs.readdir(path.join(__dirname, "files"), 'utf-8', {
                flag: "wx"
            });
            console.log("Файлы: " + files);
        }
        else
            throw new Error("Такой папки нет")

    }catch (err) {
        console.log(err.message);
    }
};

await list();
import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    try{
        const files = await fs.readdir(path.join(__dirname, 'files'));

        if (files.includes("properFilename.md")) throw new Error("Уже существует");

        await fs.rename(path.join(__dirname, 'files', "wrongFilename.txt"), path.join(__dirname, 'files', "properFilename.md"), {
            flag: "wx"
        });
        console.log("good")
    

    }catch (err) {
        console.log(err.message);
    }
};

await rename();
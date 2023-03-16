import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    try{ 
        const files = await fs.readdir(path.join(__dirname, 'files'));

        if (files.includes("fresh.txt")) throw new Error("Уже существует");

        await fs.writeFile(path.join(__dirname, "files", "fresh.txt"), "I am fresh and young", {
            flag: "wx"
        });
        console.log("good");

    } catch (err) {
        console.log(err.message);
    }
}

await create();
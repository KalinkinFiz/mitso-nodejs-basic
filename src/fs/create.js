import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const CONTENT = "I am fresh and young"
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const create = async () => {
    try {

        const files = await fs.readdir(path.join(__dirname, "files"));

        if (files.includes("fresh.txt")) throw new Error("file already exists")

        await fs.writeFile(path.join(__dirname, "files", "fresh.txt"), CONTENT, { flag: "wx" })

        console.log("Good");

    } catch (err) {

        console.log(err.message);

    }

};

await create();
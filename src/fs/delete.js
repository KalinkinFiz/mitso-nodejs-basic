import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    try{
        const files = await fs.readdir(path.join(__dirname, 'files'));

        if(files.includes("fileToRemove.txt")){

            await fs.unlink(path.join(__dirname, 'files', "fileToRemove.txt"), {
                flag: "wx"
            });

            console.log("Удален");

        }else{
            throw new Error("Уже удален")
        }

    }catch (err) {
        console.log(err.message);
    }
};

await remove();
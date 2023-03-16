import fs from 'fs'

const write = async () => {

    const writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Записано в fileToRead.txt ');
    });

    writeStream.on('error', (_err)=>{
        console.log("Ошибка при записи");
    });

};

await write();
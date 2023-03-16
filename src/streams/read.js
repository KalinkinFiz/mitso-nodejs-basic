import fs from 'fs'

const read = async () => {

    const readStream = fs.createReadStream('src/streams/files/fileToRead.txt');

    readStream.on('data',(chunk) => {
        process.stdout.write(chunk);
    })

    readStream.on('end', () => {
        console.log('\nКонец чтения файла');
    });
    
    readStream.on('error', (err) => {
        console.error(`Ошибка чтения файла: ${err}`);
    });
    
};

await read();
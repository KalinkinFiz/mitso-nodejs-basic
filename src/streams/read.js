const read = async () => {
    const { createReadStream } = await import('node:fs');
    const stream = createReadStream('files/fileToRead.txt');

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();

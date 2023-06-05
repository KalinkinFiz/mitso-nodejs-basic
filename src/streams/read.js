import { readFile, createReadStream } from 'fs';

const read = async () => {
  const stream = createReadStream('files/fileToRead.txt');
  stream.pipe(process.stdout);
  await new Promise((resolve) => stream.on('end', resolve));
};

await read();
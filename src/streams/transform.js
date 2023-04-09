import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.slice(0, -1)
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed+ "\n");
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();


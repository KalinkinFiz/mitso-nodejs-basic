import { Transform } from 'stream';

const transform = async () => {
    let stream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });
    process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
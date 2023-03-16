import { Transform, pipeline } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)


const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, _encoding, callback) {
            const reversedText = chunk.toString("utf-8").trim().split('').reverse().join('');
            this.push(reversedText + '\n');
            callback();
        }
    });
    try {
        await pipelineAsync(process.stdin, transformStream, process.stdout)
    } catch (err) {
        process.exit(1)
    }

};

await transform();
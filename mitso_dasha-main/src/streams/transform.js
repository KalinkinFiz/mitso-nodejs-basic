import { Transform, pipeline } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

class MyTransform extends Transform{
    constructor(opr){
        super(opr);
    }
    _transform(chunk, _, done){
        const transformChunk = chunk
        .toString("utf-8")
        .trim()
        .split("")
        .reverse()
        .join("");

        this.pu7sh(transformChunk + "\n");
        done();
    }
}

const transform = async () => {

    const transformStream = new Transform();
    const readableStream = process.stdin;
    const writeableStream = process.stdout;

    try {
        await pipelineAsync(readableStream, transformStream, writeableStream)
    } catch(e){
        process.stderr.write(e.message);
        process.exit(1)
    }
}
await transform();
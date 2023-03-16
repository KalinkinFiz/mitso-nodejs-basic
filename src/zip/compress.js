import { createGzip } from 'zlib'
import path from 'path'
import { createReadStream, createWriteStream } from 'fs'
import url from 'url'

const _dirname = url.fileURLToPath(new URL('.', import.meta.url))

const compress = async () => {

    const inputFile = createReadStream(path.join(_dirname, 'files', 'input.txt'))
    const outputFile = createWriteStream(path.join(_dirname, 'files', 'input.txt.gz')) 
    inputFile.pipe(createGzip()).pipe(outputFile)
};

await compress();
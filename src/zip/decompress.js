import { createUnzip } from 'zlib'
import path from 'path'
import { createReadStream, createWriteStream } from 'fs' 
import url from 'url'

const _dirname = url.fileURLToPath(new URL('.', import.meta.url))

const decompress = async () => {
    
    const inputFile = createReadStream(path.join(_dirname, 'files', 'input.txt.gz'))
    const outputFile = createWriteStream(path.join(_dirname, 'files', 'input2.txt'))

    inputFile.pipe(createUnzip()).pipe(outputFile)
    
};

await decompress();


import { createUnzip } from 'zlib'
import path from 'path'
import { createReadStream, createWriteStream } from 'fs'
import url from 'url'

const _dirname = url.fileURLToPath(new URL('.', import.meta.url))

const decompress = async () => {

    const inputFile = createReadStream(path.join(_dirname, 'files', 'fileToCompress.gz'))
    const outputFile = createWriteStream(path.join(_dirname, 'files', 'fileToCompress1.txt'))

    inputFile.pipe(createUnzip()).pipe(outputFile)

};

await decompress();

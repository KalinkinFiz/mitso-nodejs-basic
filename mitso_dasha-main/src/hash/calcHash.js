import fs from 'fs/promises'
import path from 'path'
import url from 'url'
import crypto from 'crypto'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const calculateHash = async () => {

    const fileData = fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'))

    const hash = crypto.createHash('sha256').update(fileData.toString()).digest('hex')
    console.log(`Hash for ${hash}`)
}

await calculateHash()
const calculateHash = async () => {
    const { readFile } = await import('node:fs/promises');
    const { createHmac } = await import('node:crypto');
    const content = await readFile("files/fileToCalculateHashFor.txt", {encoding: 'utf-8'})
    const secret = 'myStrongSecret';
    const hash = createHmac('sha256', secret)
        .update(content)
        .digest('hex');
    console.log(hash);
};

await calculateHash();

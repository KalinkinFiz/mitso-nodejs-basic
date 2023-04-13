import process from 'process';

const transform = async () => {
    let inputString = '';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on("data", data => {
        inputString = data.toString();
    })

    process.stdout.write(inputString);
    // Write your code here
};

await transform();

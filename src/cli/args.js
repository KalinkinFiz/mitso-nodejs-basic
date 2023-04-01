const parseArgs = () => {
    let argv = process.argv
    for (let i = 2; i < argv.length; i=i+2) {
        console.log(argv[i], "is", argv[i+1])
    }
};

parseArgs();

const parseArgs = () => {
    let firstArg = process.argv[0];
    let secondArg = process.argv[1];

    console.log("PropName1 is " + firstArg);
    console.log("PropName2 is " + secondArg);
};

parseArgs();

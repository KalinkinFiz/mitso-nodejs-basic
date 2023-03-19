const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes("CLOSE")) process.disconnect();
  process.send(`Received from master process: ${chunk.toString()}`); //TODO: Is it okay if i change this file?
  //process.stdout.write(`Received from master process: ${chunk.toString()}`);
};

process.on("message", (msg) => {
  echoInput(msg);
});

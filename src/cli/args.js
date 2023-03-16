import * as process from "process";

const parseArgs = () => {
  let obj = new Object();
  process.argv.slice(2).map((val, index, array) => {
    if (array[index].startsWith("--")) {
      obj[val];
    }
    if (!val.startsWith("-")) {
      obj[array[index - 1]] = val;
    }
  });
  for (let item in obj) {
    console.log(item + " is " + obj[item]);
  }
};

parseArgs();

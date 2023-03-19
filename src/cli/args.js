import { argv } from "process";

const parseArgs = () => {
  const obj = new Object();
  argv.slice(2).map((val, index, array) => {
    if (val.startsWith("--") && !array[index + 1].startsWith("-")) {
      obj[val] = array[index + 1];
    } else if (val.startsWith("--") && array[index + 1].startsWith("-")) {
      throw new Error("Arguments' values are invalid!");
    }
  });
  for (let item in obj) {
    console.log(item + " is " + obj[item]);
  }
};

parseArgs();

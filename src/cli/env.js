import * as process from "process";

const parseEnv = () => {
  for (let val in process.env) {
    if (val.startsWith("MITSO_")) {
      console.log(val + "=" + process.env[val]);
    }
  }
};

parseEnv();

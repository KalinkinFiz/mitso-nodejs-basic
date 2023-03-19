import { env } from "process";

const parseEnv = () => {
  for (let val in env) {
    if (val.startsWith("MITSO_")) {
      console.log(val + "=" + env[val]);
    }
  }
};

parseEnv();

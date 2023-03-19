import { stdin, stdout } from "process";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const streamTransform = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, String(chunk.reverse()).trim() + "\n");
    },
  });
  await pipeline(stdin, streamTransform, stdout);
};

await transform();

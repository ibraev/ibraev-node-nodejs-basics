import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib";
import {pipeline} from "stream";
import {promisify} from "util"

const pipe = promisify(pipeline)

export const compress = async (input, output) => {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination)
};

compress('./files/fileToCompress.txt', './files/archive.gz').catch((err) => {
  console.log(err);
  process.exit(1)
})


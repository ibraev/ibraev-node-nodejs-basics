import {createReadStream, createWriteStream} from "fs";
import {createGunzip} from "zlib";
import {pipeline} from "stream";
import {promisify} from "util"

const pipe = promisify(pipeline)

export const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');
    await pipe(source, gzip, destination)
};

decompress().catch((err) => {
    console.log(err);
    process.exit(1)
})


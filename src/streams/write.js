import {createWriteStream} from "fs";

export const write = async () => {
    const writeStream = createWriteStream('./files/fileToWrite.txt');
    const chunk = writeStream.write('Hello world', 'utf8');
    process.stdin.write(chunk);
};

write().then((r) => r).catch((err) => err)
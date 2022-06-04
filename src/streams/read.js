import {createReadStream} from "fs";

export const read = async () => {
    const stream = createReadStream('./files/fileToRead.txt', 'utf-8');
    stream.on('error', (err) => {
        process.stdout.write(err)
    })

    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

read().then(r => r);
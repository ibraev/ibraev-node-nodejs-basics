import fs from "fs";

export const read = async () => {
    await fs.readFile('./files/fileToRead.txt', 'utf8', (error, data) => {
        if (error) {
            console.log(Error('FS operation failed'), error)
        }
        console.log(data)
    })
};

read().then(r => r).catch(e => e)
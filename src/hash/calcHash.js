import {readFile} from "fs";
import crypto from "crypto";

export const calculateHash = async (input) => {
    const hashData = crypto.createHash('sha256');
    await readFile(input, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        return console.log(hashData.update(data).digest('hex'))
    })
};

calculateHash('./files/fileToCalculateHashFor.txt').then(r => r);
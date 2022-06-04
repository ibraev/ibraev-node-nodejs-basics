import path from "path";
import {release, version} from "os";
import * as http from "http";
import  "./files/c.js"
import a from "./files/a.json" assert {type: 'json'}
import b from "./files/b.json" assert {type: 'json'}
import {fileURLToPath} from "url";

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});




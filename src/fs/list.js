import fs from "fs"

export const list = async () => {
    await fs.readdir('./files', (err, files) => {
        if (err) {
            return console.log(Error('FS operation failed'), err)
        }
        files.map((file) => console.log(file))
    })
};

list().then(r => r).catch(e => e)
import fs from "fs"

export const create = async () => {
   await fs.appendFile('./files/fresh.txt', 'I am fresh and young', function (err) {
       if (err) throw new Error('FS operation failed')
    })
};

create().then(r => r).catch(e => e)
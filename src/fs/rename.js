import fs from "fs"

export const rename = async () => {
   await fs.rename('./files/wrongFilename.txt', './files/properFilename.md', function (err, result) {
        if(err) {
            console.log(Error('FS operation failed'), err)
        }
    })
};

rename().then(r => r).catch(e => e)
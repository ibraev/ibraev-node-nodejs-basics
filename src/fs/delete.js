import fs from "fs"
export const remove = async () => {
    await fs.unlink('./files/fileToRemove.txt', (err) => {
        if (err) {
            console.log(Error('FS operation failed'), err)
        }
    })
};

remove().then(r => r).catch(e => e)
const path = require("path")
const fs = require("fs")
class CatFileCommand{
    constructor(flag, commitSHA){
        this.flag = flag;
        this.commitSHA = commitSHA;
    }
    execute(){
        // S-1 : navigate to .git/objects/commitSHA[0..2]
        // S-2 : read the file .git/objects/commitSHA[0..2]/commitSHA[2...n]
        // S-3 : de-compress
        // S-4 : output
        const flag = this.flag
        const commitSHA = this.commitSHA
        switch(flag){
            case "-p":{
                const folder = commitSHA.slice(0,2);
                const file = commitSHA.slice(2);
                const completePath = path.join(process.cwd(), ".git", ".objects", folder, file)
                if(!fs.existsSync(completePath)) throw new Error(`Not today! $(commintSHA)`)
            }
            break;
        }
    }
}

module.exports = CatFileCommand
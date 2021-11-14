const test = require("baretest")("Reesauce Bot Tests"),
    assert = require("assert"),
    fs = require("fs");


const configPath = `${__dirname}/../config.toml`;
if(!fs.existsSync(configPath)){
    fs.writeFileSync(configPath, fs.readFileSync(`${__dirname}/../config.example.toml`));
}

function readFolderRecursive(dir){
    let files = fs.readdirSync(dir);
    // Traverse All folders
    files
    .forEach((fileOrFolder) =>{
        const path = `${dir}/${fileOrFolder}`;
        if(!fileOrFolder.includes(".")){
            readFolderRecursive(path);
        }else if(fileOrFolder.endsWith(".test.js")){
            require(path)(test, assert);
        }
    });

}

readFolderRecursive(`${__dirname}`);

(async ()=>{
    try{
        const res = await test.run();
        process.exit(res ? 0 : 1);
    }catch(err){
        process.exit(1);
    }
})();
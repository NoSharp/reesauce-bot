const test = require("baretest")("Reesauce Bot Tests"),
    assert = require("assert"),
    fs = require("fs");

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
        await test.run();
    }catch(err){
        process.exit(1);
    }finally{
        process.exit();
    }
})();
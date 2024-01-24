let fs=require('fs');

function writeFile(){
    let data = "Writing in a file"
    fs.writeFile('Output.txt',data,(err)=>{
        if(err)
            throw err;
    })
}

writeFile();
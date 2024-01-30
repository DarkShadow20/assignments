let fs = require('fs')

function fileCleaner(writeClearText){
    fs.readFile('inpu.txt','utf-8',function(err,data){
        if(err)
            throw err
        writeClearText(data.toString());
    });
}
function writeClearText(data){
    let cleanData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('Output.txt',cleanData,(err)=>{
        if(err)
            throw err
    })

}
fileCleaner(writeClearText)
console.log("file cleaner ran")

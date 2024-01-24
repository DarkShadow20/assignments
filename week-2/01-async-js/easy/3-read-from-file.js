var fs=require('fs')

function readFile(){
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err)
        }
        console.log(data.toString())
    })
}

readFile()

for(let i=0;i<1000000000000;i++){
    
}


/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("foo")
        },n * 1000)
    })
    return promise.then((value)=>console.log(value)).catch((err)=>{
        console.error(err)
    })   
}

module.exports = wait;

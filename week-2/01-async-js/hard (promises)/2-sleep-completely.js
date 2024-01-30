/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime < milliseconds){

    }
    const promise = new Promise((resolve,reject)=>{
        resolve(`Resolved after ${milliseconds} milliseconds`)
    },milliseconds * 1000)

    return promise.then((value)=>console.log(value)).catch(err=>console.error(err))
}

module.exports = sleep;

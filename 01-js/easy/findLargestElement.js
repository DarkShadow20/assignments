/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let currMax=Number.NEGATIVE_INFINITY
    if(numbers.length){
    for (let i=0;i<numbers.length;i++){
        if(currMax<numbers[i]){
            currMax=numbers[i]
        }
    }
    return currMax
    }
    return ;
}
module.exports = findLargestElement;
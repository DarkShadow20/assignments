/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false
  }
  let map= new Map();

  for(let i=0; i<str1.length; i++){
    if(map.has(str1[i].toLowerCase())){
      map.set(str1[i].toLowerCase(),map.get(str1[i].toLowerCase())+ 1)
    }
    else{
      map.set(str1[i].toLowerCase(),1);
    }
  }
  for(let i=0;i<str2.length; i++){
    if(map.has(str2[i].toLowerCase())){
      map.set(str2[i].toLowerCase(),map.get(str2[i].toLowerCase())- 1)
    }
  }
    let keys = map.keys();
    for(let key of keys){
      if(map.get(key)!=0){
        return false;
      }
    }
    return true
  }
module.exports = isAnagram;

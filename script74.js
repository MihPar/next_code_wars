var isAnagram = function(test, original) {
    let arrOne = test.toLowerCase().split("").sort().join("")
    let arrTwo = original.toLowerCase().split("").sort().join("")
    
    return arrOne === arrTwo
    // if(arrOne === arrTwo) {
    //   return true
    // } else {
    //   return false
    // }
    
  };
  console.log(isAnagram("apple", "pale"))
  console.log(isAnagram("Twoo", "WooT"))
  
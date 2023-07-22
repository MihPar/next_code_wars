function spinWords(string){
    let newArr = []
    let prop
    let arr = string.split(" ")
    for(let char of arr) {
      if(char.length < 5) {
        newArr.push(char)
      } else if(char.length >= 5) {
        prop = char.split("").reverse().join("")
        newArr.push(prop)
      }
    }
    return newArr.join(" ")
  }
  // console.log(spinWords("This is another test"))
  // console.log(spinWords("Welcome"))
  console.log(spinWords("Just kidding there is still one more"))
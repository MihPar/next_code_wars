function XO(str) {
    let o = 0
    let x = 0
 
    let newStr = str.toUpperCase()
    let arr = newStr.split("")
    
    for(let char of arr) {
      if(char === "O") {
        o = o + 1
      } else if(char === "X") {
        x = x + 1
      }
    }
 // console.log(o)
 // console.log(x)
 
  if(o !== x) {
    return false
  } else {
    return true
  }
}
console.log(XO("xOoooooxx"))
// console.log(XO("xo"))
// console.log(XO("ooom"))
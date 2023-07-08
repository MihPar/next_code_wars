function rotate(str){
    let arr = []
    let newStr = ''
    for(let i = 0; i < str.length; i++) {
      arr.push(str.slice(i + 1) + str.slice(0, i + 1))
    }
    return arr
  }
  console.log(rotate("Hello"))
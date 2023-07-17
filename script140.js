function billboard(name, price = 30){
    let result = 0
    let arr = name.split("")
    let len = arr.length
    for(let char = 1; char <= len; char++) {
      result += price
    }
    return result
  } 
  console.log(billboard("Abishai Charalampos"))
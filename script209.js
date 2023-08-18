function tailSwap(arr) {
    let one = arr[0].split(":")
    let two = arr[1].split(":")
    let arrOne = []
    arrOne.push(one[0], ":", two[1])
    let strOne = arrOne.join("")
    
    let arrTwo = []
    arrTwo.push(two[0], ":", one[1])
    let strTwo = arrTwo.join("")
    let r = [strOne, strTwo]
    return r
    
  }
  console.log(tailSwap(['abc:123', 'cde:456']))
  
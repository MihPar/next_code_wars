function convert(number){
    let arr = number.split("")
    let result = []
    let str
    for(let i = 0; i < arr.length; i +=2) {
      result.push(arr[i] + arr[i + 1])
      
    }
    return result.map(function(item) {
      return String.fromCharCode(+item)
    }).join("")
  }
  console.log(convert("676584"))
function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0) {
      return []
    } else {
      let arr = []
      let  count = 0
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
          arr.push(input[i])
        } else if(input[i] < 0) {
          count += input[i]
        }
      }
      return [arr.length, count]
    }
 }
 console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
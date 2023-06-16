Array.range = function(start, count) {
    let newArr = []
    for(let i = 0, j = start; i < count; i++, j++) {
     newArr.push(j)
    }
    return newArr
    // console.log(newArr)
   }
   Array.prototype.sum = function() {
    let sum = 0
    this.forEach(function(item) {
     sum += item
    })
    return sum
   }
   
   
function sumMul(n,m){
    if(m <= 0) {
      return "INVALID"
    } else {
      let sum = 0
    for(let i = n; i < m; i+=n) {
      sum +=i
    }
    return sum
    }
  }
  console.log(sumMul(2, 16))
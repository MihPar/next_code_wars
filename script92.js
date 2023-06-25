function sumDigits(number) {
    let sum = 0;
    const absoluteNumber = Math.abs(number);
    
    for(let char of absoluteNumber.toString()) {
      sum += parseInt(char);
    }
    
    return sum;
  }
  console.log(sumDigits(10))
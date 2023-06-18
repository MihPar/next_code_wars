var Calculator = {
    add(a, b) {
      return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply(a, b) {
      return a * b 
    },
    divide(a, b) {
        if(b === 0) {
            return false
        } else {
          return a / b
        }
    }
  }
  console.log(Calculator.add(2, 4))
  console.log(Calculator.divide(2, 0))
function sum (numbers) {
    return numbers.reduce(function(accum, item) {
      return accum + item
    }, 0)
};
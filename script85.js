function oddOrEven(array) {
    return array.reduce((accum, item) => {return accum += item}, 0) % 2 === 0 ? "even" : "odd"
  }
  console.log(oddOrEven([0, 1, 5]))
  console.log(oddOrEven([0]))
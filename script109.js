function noBoringZeros(n) {
    let num = n.toString().replace(/0+$/, "")
    // console.log(typeof +num)
    return +num
  }
  console.log(noBoringZeros(-1050))
  
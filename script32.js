function secondSymbol(s, symbol) {
    const arr = s.split("")
    let result = arr.indexOf(symbol)
    let mySelf = arr.indexOf(symbol, result + 1)
    return mySelf
  }
  console.log(secondSymbol('Hello world!!!', 'o'))
function sumMix(x){
    return x.reduce(function(accum, item) {
      return accum + Number(item)
    }, 0)
  }
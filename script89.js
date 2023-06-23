function accum(s) {
    return [...s.toUpperCase()].reduce(function(accum, item, index) {
      return accum + "-" + item + item.toLowerCase().repeat(index)
    })
    }
    console.log(accum("ZpglnRxqenU"))
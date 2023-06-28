function consonantCount(str) {
    //   let exp = /([b-df-hj-np-tv-z])/gi
    //   let consonant = str.match(exp)
    //   return consonant.length
      return str.split('').filter(v=>/[qzwsxdcrfvtgbyhnjmklp]/gi.test(v)).length
    }
function consonantCount(str) {
    //   let exp = /([b-df-hj-np-tv-z])/gi
    //   let consonant = str.match(exp)
    //   return consonant.length
      return str.split('').filter(v=>/[qzwsxdcrfvtgbyhnjmklp]/gi.test(v)).length
    }

console.log(consonantCount('bcdfghjklmnpqrstvwxyz'))
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'))
function isOpposite(s1,s2){
    if(s1.length === 0 || s2.length === 0) {
      return false
    } else if(s1.length === s2.length) {
      let str = ''
        for(let i = 0; i < s1.length; i++) {
        if(s1[i] === s1[i].toUpperCase()) {
          str += s1[i].toLowerCase()
        } else if (s1[i] === s1[i].toLowerCase()) {
          str += s1[i].toUpperCase()
        }
      }
      if(s2 === str) {
        return true
      } else {
        return false
      }
    } else {
      return false
    } 
  }
  console.log(isOpposite("aBcd", "AbCD"))
  console.log(isOpposite("aBcde", "AbCD"))
  console.log(isOpposite("AB","Ab"))
  console.log(isOpposite("", ""))
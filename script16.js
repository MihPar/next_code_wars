function strCount(str, letter){  
    if(str === '') {
      return 0
    } else {
      let num = 0
      let arr = str.split("")
      arr.map(function(item) {
        if(item === letter) {
          num++
        }
      })
      return num
    }
  }
  console.log(strCount('Hello', 'l'))
  console.log(strCount('',      'z'))
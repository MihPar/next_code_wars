function containAllRots(string, arr) {
    if(arr == false) {
      return true
    } else {
      let newString = string.split("").sort().join("")
    
    let r = arr.map(function(item) {
      return item.split("").sort().join("")
    })
    
      for(let char of r)  {
        return (newString === char || string === "") ? true : false
        
        // if(newString === char && string === "") {
        //   return true
        // } else {
        //   return false
        // }
      }
    }
  }
  console.log(containAllRots("", []))
  console.log(containAllRots("", ["bsjq", "qbsj"]))
  console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))
function uniTotal (string) {
    let count = 0
    for(let i = 0; i < string.split("").length; i++) {
      count +=string.split("")[i].charCodeAt()
    }
    return count
  }
  uniTotal("aaa")
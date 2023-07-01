function isPythagoreanTriple(integers) {
    let arr = []
    for(let i = 0; i < integers.length; i++) {
      arr.push(integers[i])
    }
    let n = arr.sort()
    return (n[0] ** 2 ) + (n[1] ** 2) === (n[2] ** 2) ? true : false
  }
  console.log(isPythagoreanTriple([72, 78, 30]))
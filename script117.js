function binaryPyramid(m,n){
    let sum = 0
    for(let i = m; i <= n; i++) {
      let binary = i.toString(2)
      let result = Number(binary)
      sum += result
    }
    let my = sum.toString(2)
    return my
  }
  console.log(binaryPyramid(1,4))
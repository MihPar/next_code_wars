const flip=(d, a)=>{
    if(d === 'R') {
          return a.sort(function(a, b) {
              return a - b
          })
      } else if(d === "L") {
          return a.sort(function(a, b) {
              return b - a
          })
      }
  }
  console.log(flip('R', [3, 2, 1, 2]))
  console.log(flip('L', [3, 2, 1, 2]))
  console.log(flip('L', [13, 2, 4, 7, 93 ]))
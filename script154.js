function squares(x, n) {
    if(n < 0 || n === 0) {
      return []
    } else {
        let arr = [x]
        for(let i = 0; i < n - 1; i++) {
            let num = arr[i] * arr[i]
            arr.push(num)
        }
        return arr
    }
  }
  console.log(squares(10,4))
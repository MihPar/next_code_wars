function bubblesortOnce(a) {
    let newArr = [...a]
      for(let i = 0; i < newArr.length - 1; i++) {
          if(newArr[i] > newArr[i + 1]) {
              [newArr[i],newArr[i + 1]] = [newArr[i + 1],newArr[i]]
          }
      }
      return newArr
  }
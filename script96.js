function partlist(arr) {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
      const left = arr.slice(0, i);
      const right = arr.slice(i);
      result.push([left.join(' '), right.join(' ')]);
    }
    return result;
  
  }
  console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]))
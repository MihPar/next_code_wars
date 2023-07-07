function enough(cap, on, wait) {
    let n = cap - on
    if(n - wait >= 0) {
      return 0
    } else if(n - wait < 0) {
      return wait - n
    }
  }``
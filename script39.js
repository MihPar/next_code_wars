function _if(bool, func1, func2) {
    if(bool === true) {
      return func1()
    } else if(bool === false) {
      return func2()
    }
  }
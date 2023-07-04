String.prototype.eachChar = function(arg) {
    if (typeof arg === 'function') {
      let result = '';
      for (let i = 0; i < this.length; i++) {
        result += arg(this[i]);
      }
      return result;
    } else if (typeof arg === 'string') {
      let result = '';
      for (let i = 0; i < this.length; i++) {
        result += this[i] + arg;
      }
      return result;
    } else {
      return this;
    }
  };
  
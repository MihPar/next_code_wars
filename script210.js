var filterString = function(value) {
    var numb = value.match(/\d/g);
    numb = +numb.join("");
      return numb
    }
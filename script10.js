function solution(number) {
    var num   = '',
        nextNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        nextValue    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    nextNum.map(function (value, index) {
      while (number >= value) {
        num += nextValue[index];
        number -= value;
      }
    });
    
    return num;
  }
  console.log(solution(1000))
function first(arr, n) {
  
    return n === undefined ? [arr[0]] : n === 0 ? [] : arr.slice(0, n)

}
const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(first([...arr], 2))
console.log(first([...arr]))


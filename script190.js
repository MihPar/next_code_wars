function maxAndMin(arr1,arr2){
    return [
      Math.max( ...arr1.map(n => Math.max( ...arr2.map(m => Math.abs(n - m)) )) ),
      Math.min( ...arr1.map(n => Math.min( ...arr2.map(m => Math.abs(n - m)) )) )
    ]
  }
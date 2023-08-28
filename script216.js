function howMuchWater(water, load, clothes){
    return clothes < load ? 'Not enough clothes': clothes > 2 * load 
    ? 'Too much clothes' : +( water * 1.1 ** (clothes - load)).toFixed(2)
  }
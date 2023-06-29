function startingMark(bodyHeight){
    let slope = (10.67 - 9.45) / (1.83 - 1.52)
    let intersept = 9.45 - slope * 1.52
    const startingMark = slope * bodyHeight + intersept
    return Math.round(startingMark * 100) / 100
    
  }
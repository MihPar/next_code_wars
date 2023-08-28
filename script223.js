function barTriang(p1, p2, p3){
    let xO = (p1[0] + p2[0] + p3[0])/3.0
    let yO = (p1[1] + p2[1] + p3[1])/3.0
    return [+xO.toFixed(4), +yO.toFixed(4)]
  }
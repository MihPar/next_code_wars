//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
    var x = point[0], y = point[1];
    var inside = false;
  
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1];
      var xj = poly[j][0], yj = poly[j][1];
  
      var intersect = ((yi > y) != (yj > y)) &&
                      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
  
      if (intersect) inside = !inside;
    }
  
    return inside;
  }
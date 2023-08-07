function slope(points)
{
  let x = points[2] - points[0]
  let y = points[3] - points[1]
  if ( x === 0) {
    return "undefined"
  } else {
  let result = y / x
   return result.toString()
  }
}
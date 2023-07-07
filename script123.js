function minimumPerimeter(area) {
    let width = Math.floor(Math.sqrt(area))
    while(area % width !== 0) {
      width--
    }
    let height = area / width
    return 2 * (width + height)
  }
  
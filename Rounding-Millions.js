function millionsRounding(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] < 500000) {
        arr[i][j] = 0;
      } else if (arr[i][j] >= 500000) {
        arr[i][j] = Math.round(arr[i][j]);
      }
    }
  }
  return arr;
}

console.log(
  millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572],
  ])
);

const fs = require("fs");

const planeRows = 128
const planeCols = 8

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const passes = data.split('\n')
  const seatIds = []
  
  passes.map(pass => {
    let minRow = 0,
        maxRow = planeRows,
        minCol = 0,
        maxCol = planeCols

    pass.split('').forEach(letter => {
      if (letter === 'F') {
        maxRow = Math.floor((minRow + maxRow) / 2)
      } else if (letter === 'B') {
        minRow = Math.floor((minRow + maxRow) / 2)
      } else if (letter === 'L') {
        maxCol = Math.floor((minCol + maxCol) / 2)
      } else if (letter === 'R') {
        minCol = Math.floor((minCol + maxCol) / 2)
      } 
    })

    seatIds.push((minRow * 8) + minCol)
  })

  console.log(Math.max(...seatIds))
});

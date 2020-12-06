const fs = require("fs");

const tree = '#'
const slope = 3
let position = 0

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const map = data.split('\n')
  
  console.log(
    map.slice(1).filter(row => {
      position += slope
      if (position > map[0].length - 1) position -= map[0].length

      return row.split('')[position] === tree
    }
    ).length
  )
});

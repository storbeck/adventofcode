const fs = require("fs");

const tree = '#'
const attempts = []
const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 }
]

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const map = data.split('\n')

  slopes.forEach(slope => {
    // Reset counters
    let hits = 0
    let position = 0

    for (let row = slope.y; row < map.length; row += slope.y) {
      // Set new X position
      position += slope.x

      // Reset X coords for infinite scrolling map
      if (position > map[0].length - 1) position -= map[0].length

      // Check of current position hits a tree
      if (map[row].split('')[position] === tree) {
        hits++
      }
    }
    attempts.push(hits)
  })

  // Calculate products
  console.log(attempts.reduce((acc, cv) => acc * cv))
});

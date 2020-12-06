const fs = require("fs");
const total = 2020;

fs.readFile("d1p2.txt", "utf8", (err, data) => {
  if (err) throw err;

  const uniques = [...new Set(data.split("\n"))];
  let running = true;

  for (let num of uniques) {
    for (let num2 of uniques) {
      const x = Number(num),
            y = Number(num2)

      const missing = Math.abs(total - (x + y))

      if (x + y + missing === total && uniques.includes('' + missing)) {
        console.log(x * y * missing)
        running = false;
        break
      }        
    }
    if (!running) break
  }
});

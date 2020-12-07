const fs = require("fs");
const total = 2020;

fs.readFile("d1p1.txt", "utf8", (err, data) => {
  if (err) throw err;

  const uniques = new Set(data.split("\n"));

  for (let num of uniques) {
    const missing = "" + Math.abs(num - total);
    if (uniques.has(missing)) {
      console.log(num * missing);
      break
    }
  }
});

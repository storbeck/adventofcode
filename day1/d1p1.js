const fs = require("fs");
const total = 2020;

fs.readFile("d1p1.txt", "utf8", (err, data) => {
  if (err) throw err;

  const uniques = [...new Set(data.split("\n"))];

  uniques.every((num) => {
    const missing = "" + Math.abs(num - total);
    if (uniques.includes(missing)) {
      console.log(num * missing);
      return false
    }
    return true
  });
});

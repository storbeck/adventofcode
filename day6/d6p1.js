const fs = require("fs");

fs.readFile("d1p1.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(
    data
        .split("\n\n")
        .map((line) => [...new Set(line.replace(/\n/g, ""))].length)
        .reduce((ac, cv) => ac + cv)
  )
});

const fs = require("fs");

fs.readFile("d2p1.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(
  data.split('\n').filter(line => {
    const parts = line.split(' ')
    const nums = parts[0].split('-')
    const min = Number(nums[0]),
          max = Number(nums[1]),
          rule = new RegExp(parts[1][0], 'g'),
          password = parts[2]

    const match = password.match(rule)
    
    if (!match) return false

    return (match.length >= min && match.length <= max)
  }).length)
});

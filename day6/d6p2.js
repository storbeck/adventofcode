const fs = require("fs");

fs.readFile("d6p2.txt", "utf8", (err, data) => {
  if (err) throw err;
  
  console.log(data
    .split("\n\n")
    .map(line => {
      const members = line
        .split('\n')
        .filter(e => e !== '')

      // Return length if only 1 person & remove file artifacts 
      if (members.length === 1) 
        return line.replace(/\n/g,'').length

      // Placeholders for answer counts
      const count = {}

      // Generate answer counts
      members
        .join('')
        .split('')
        .forEach(i => count[i] = (count[i] || 0) + 1)

      // Compare if counts are duplicated by everybody
      return Object
        .keys(count)
        .filter(k => count[k] === members.length)
        .filter(k => k).length
    }).reduce((acc, cv) => acc + cv))
})
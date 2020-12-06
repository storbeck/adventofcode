const fs = require("fs");

const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const passports = data.split('\n\n')
  
  console.log(
    passports.filter(passport => {
      const fields = passport.replace(/\n/g, '')
      return reqFields.every(field => fields.includes(field))
    }).length
  )
});

const fs = require("fs");
const validate = require('./validations')

const req = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;

  const passports = data.split('\n\n')
  
  console.log(
    passports.filter(passport => {
      const fields = passport.replace(/\n/g, ' ')

      // Return instantly if we don't have all fields
      if (!req.every(field => fields.includes(field))) return false

      const hash = {}
      fields.split(' ').forEach(entry => {
        const pair = entry.split(':')
        hash[pair[0]] = pair[1];
      })

      return (
        validate.BirthYear(Number(hash['byr'])) &&
        validate.IssueYear(Number(hash['iyr'])) &&
        validate.ExpirationYear(Number(hash['eyr'])) &&
        validate.Height(hash['hgt']) &&
        validate.HairColor(hash['hcl']) &&
        validate.EyeColor(hash['ecl']) &&
        validate.PassportID(hash['pid'])
      )
    }).length
  )
});

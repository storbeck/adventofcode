const fs = require("fs");

fs.readFile("d2p1.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(
    data.split("\n").filter((line) => {
      const parts = line.split(" ");
      const nums = parts[0].split("-");
      const first = Number(nums[0] - 1),
            second = Number(nums[1] - 1),
            letter = parts[1][0],
            password = parts[2];

      if (!password[second]) return false;

      return (password[first] === letter) ^ (password[second] === letter);
    }).length
  );
});

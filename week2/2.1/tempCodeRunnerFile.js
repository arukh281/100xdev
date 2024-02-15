const fs = require("fs");

fs.readFile(
  "C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt",
  ondone,
);

function ondone(content) {
  console.log(content);
}

console.log("hi there");

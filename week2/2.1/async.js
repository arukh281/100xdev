const fs = require("fs");
function read_file() {
  fs.readFile(
    "C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt",
    "utf8",
    ondone,
  );
}

function ondone(err, content) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(content);
}

read_file();
console.log("hi there");

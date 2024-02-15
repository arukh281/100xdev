const fs = require("fs");

function readandprintfile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("expensive operation");
    setTimeout(function () {
      console.log("end of expensive function");
    }, 2000);
    console.log(data);
  });
}

readandprintfile(
  "C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt",
);

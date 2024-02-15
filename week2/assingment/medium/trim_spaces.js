const fs = require("fs");

function removespaces(text) {
  return text.replace(/\s+/g, " ").trim();
}

function removeandwrite(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const updatescontent = removespaces(data);
    fs.writeFile(filename, updatescontent, "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("file updates successfully");
    });
  });
}

removeandwrite(
  "C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt",
);

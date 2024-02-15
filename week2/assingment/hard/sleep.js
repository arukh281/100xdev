const sleep = require("C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\assingment\\hard\\sleep_complete;y.js"); // Assuming your file is in the same directory

console.log("going to sleep");
sleep(2000)
  .then(() => {
    console.log("after 2 seconds");
  })
  .catch((error) => {
    console.error("error :", err);
  });
console.log("end");

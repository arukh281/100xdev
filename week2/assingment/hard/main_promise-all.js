const calculateTime1 = require("C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\assingment\\hard\\promise-all.js");
const calculateTime2 = require("C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\assingment\\hard\\promise-all.js");

calculateTime1(1000, 2000, 3000)
  .then((time) => {
    console.log("total time take " + time + " milliseconds");
  })
  .then(() => {
    calculateTime2(1000, 2000, 3000).then((time) => {
      console.log("total time take " + time + " milliseconds");
    });
  });

// calculateTime2(1000,2000,3000)
//     .then((time)=>{
//         console.log('total time take '+ time + " milliseconds");
//     })
//     .catch((error)=>{
//         console.log('error: ',error);
//     });

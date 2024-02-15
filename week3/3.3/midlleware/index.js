const express = require("express");
const app = express();
app.use(express.json());

// function which returns a boolean
// function isOld(age){
//     if (age>=14){
//         return true;
//     }else{
//         return false;
//     }
// }

function isOld_middleware(req, res, next) {
  const age = parseInt(req.query.age);
  if (age <= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are not of age yet",
    });
  }
}

app.use(isOld_middleware);

app.get("/ride1", function (req, res) {
  res.json({
    msg: "you have succfully riden ride 1",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "you have succfully riden ride 2",
  });
});

// app.get("/ride2",function(req,res){
//     if (isOld(req.query.age)){
//         res.json({
//             msg:"you have succfully riden ride 2"
//         });
//     }else{
//         res.status(411).json({
//             msg :"sorry you are out of age"
//         });
//     };
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

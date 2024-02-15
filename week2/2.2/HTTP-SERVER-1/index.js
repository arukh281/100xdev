const express = require("express");
const port = 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("prince ki maa ki chuut!");
});

// app.post('/backend-api/conversation',function(req,res){
//     res.send('hello world')
// })

app.listen(port);

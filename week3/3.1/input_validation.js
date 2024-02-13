const express = require("express");

const app = express();

app.post("/health-checkup",function(req,res){
    // kidney =[1,2]
    const kidney = req.body.kidney;
    const kidneylenght = kidney.length;

    res.send("you have" + kidneylenght + "kidney")
});

app.listen(3000);
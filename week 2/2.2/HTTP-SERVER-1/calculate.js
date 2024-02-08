const express = require("express");

function calculatesum(n,a){
    let ans = 0;
    for(let i = 0;i<n;i++){
        ans = ans+i;
    }
    ans = ans+parseInt(a);
    return (ans);
}

const app = express();

app.get("/",function(req,res){
    const n = req.query.n;
    const a = req.query.a;
    const ans = calculatesum(n,a)
    res.send(ans.toString());
})

app.listen(3000);
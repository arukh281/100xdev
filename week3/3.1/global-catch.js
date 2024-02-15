// if there is error in user inout in the body, there is somethiong called global catch.

const express = require("express");

const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidney =[1,2]
  const kidney = req.body.kidney;
  const kidneylenght = kidney.length;

  res.send("you have" + kidneylenght + "kidney");
});

// gives a baeutifies error handling.
app.use(function (err, req, res, next) {
  errorcount++;
  res.json({
    msg: "sorry something is up with our server",
  });
});

app.listen(3000);

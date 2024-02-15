const express = require("express");

const app = express();
app.use(express.json());

// app.use(middleware)/
// middle ware is ia function that will be called whenever app is used

app.get("/health-checkup", (req, res) => {
  //do health check up here
  const kidneyid = req.query.kidneyid;
  const username = req.headers.username;
  const password = req.headers.password;

  if (!(username === "aradhya" && password === "pass")) {
    res.status(400).json({
      msg: "something up with your input",
    });
    return;
  }

  if (kidneyid != 1 && kidneyid != 2) {
    res.status(400).json({ msg: "something up with your input" });
    return;
  }
  //do something with kidney here
  res.json({
    msg: "your kidney is fine!",
  });
});

app.listen(3000);

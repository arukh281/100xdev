const express = require("express");

const app = express();

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnkidney = users[0].kidneys;
  const numberofkidney = johnkidney.length;
  let numberofhealthykidneys = 0;
  for (let i = 0; i < johnkidney.length; i++) {
    if (johnkidney[i].healthy) {
      numberofhealthykidneys = numberofhealthykidneys + 1;
    }
  }
  const numberofunhealthykidneys = numberofkidney - numberofhealthykidneys;
  res.json({
    numberofkidney,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});

app.post("/", function (req, res) {
  // console.log(req.body) // undefined/ if app.use(express.json()); not used

  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "done",
  });
});

app.delete("/", function (req, res) {
  const newkidney = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidney.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newkidney;
  res.json({
    msg: "done",
  });
});

app.listen(3000);

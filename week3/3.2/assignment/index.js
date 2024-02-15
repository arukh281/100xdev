const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "12345";

const app = express();
app.use(express.json());

const ALLUSERS = [
  {
    username: "harkirat@gmail.com",
    password: "12345",
    name: "harkirat",
  },
  {
    username: "aru@gmail.com",
    password: "5678",
    name: "aradhya",
  },
  {
    username: "xyz@gmail.com",
    password: "7777",
    name: "xyz",
  },
];
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userexist(username, password)) {
    return res.status(403).json({
      msg: "user does not exist",
    });
  }
  var token = jwt.sign({ username: username }, jwtpassword);
  return res.json({
    token,
  });
});

function userexist(username, password) {
  let k = 0;
  for (let i = 0; i <= ALLUSERS.length; i++) {
    if (username == ALLUSERS[i].username && password == ALLUSERS[i].password) {
      return true;
    }
  }
  return false;
}

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtpassword);
    const decoded_username = decoded.username;
    const users = print_users(decoded_username);
    return res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000);

// function print_users(res,username){
//     for(let i =0;i<=ALLUSERS.length;i++){
//         if(!username==ALLUSERS[i].username){
//             res.json({
//                 user: ALLUSERS[i],
//             })
//         }else {
//             continue;
//         }
//     };
// };

function print_users(username) {
  const users = [];
  for (let i = 0; i < ALLUSERS.length; i++) {
    if (username !== ALLUSERS[i].username) {
      users.push(ALLUSERS[i]);
    }
  }
  return users;
}

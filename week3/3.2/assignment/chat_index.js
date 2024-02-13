const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "12345";

const app = express();
app.use(express.json());

const ALLUSERS = [
    {
        username : "prince@gmail.com",
        password : "4567",
        name : "harkirat"
    },
    {
        username : "aru@gmail.com",
        password : "5678",
        name : "aradhya"
    },
    {
        username : "xyz@gmail.com",
        password : "7777",
        name : "xyz"
    }
];

app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userexist(username,password)){
        return res.status(403).json({
            msg:"user does not exist"
        });
    }
    var token = jwt.sign({username:username}, jwtpassword);
    return res.json({
        token,
    });
});

function userexist(username,password){
    for(let i = 0; i < ALLUSERS.length; i++){
        if(username === ALLUSERS[i].username && password === ALLUSERS[i].password){
            return true;
        }
    }
    return false;
}

// app.get("/users", function(req,res){
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token, jwtpassword);
//         const decoded_username = decoded.username;
//         const users = print_users(decoded_username);
//         return res.json(users);
//     }catch(err){
//         return res.status(403).json({
//             msg:"invalid token",
//         });
//     }
// });

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({
            msg: "Token not provided",
        });
    }
    try{
        const decoded = jwt.verify(token.split(' ')[1], jwtpassword);
        const decoded_username = decoded.username;
        const users = print_users(decoded_username);
        return res.json(users);
    } catch(err){
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});


function print_users(username){
    const users = [];
    for(let i = 0; i < ALLUSERS.length; i++){
        if(username !== ALLUSERS[i].username){
            users.push(ALLUSERS[i]);
        }
    }
    return users;
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

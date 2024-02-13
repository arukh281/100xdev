const mongoose = require("mongoose");
const { string } = require("zod");
const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://arukhandelwal281:FcromRQQNBxmlLuU@cluster0.ayyjrqz.mongodb.net/")

const User = mongoose.model('user',{name : String,email:String,Password: String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existing_user = await User.findOne({email: username});
    if(existing_user){
        return res.status(400).send("user already exist");
    }

    const user = new User({
        name: name,
        email:username,
        Password:password
    });
    user.save();
    res.json({
        msg:"user created successfully"
    })

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
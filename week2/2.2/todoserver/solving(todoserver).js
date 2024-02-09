const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(express.json());

let todo = [];


app.get('/todo', (req, res) => {
    const response = {
        msg: "done"
    };
    res.json(response);
});


app.get('/todo/:id',(req,res)=>{
    const todoitem = todo.find(t=>t.id===parseInt(req.params.id));
    if(!todoitem){
        res.status(404).json({msg:"error"});
    }else{
        res.json(todoitem);
    }
});

app.post('/todo',(req,res)=>{
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing or empty' });
    }

    const newtodo ={
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    };
    todo.push(newtodo);
    res.status(201).json({
        msg:"done",
        newtodo
    });
})



app.put('/todo/:id',(req,res)=>{
    const todoIndex = todo.findIndex(t=> t.id === parseInt(req.params.id));
    if(todoIndex===-1){
        res.status(404).send();
    }else{
        todo[todoIndex].title = req.body.title;
        todo[todoIndex].description=req.body.description;
        res.json(todo[todoIndex]);
    }
});

app.delete('/todo/:id',(req, res)=> {
    const todoIndex = todo.findIndex(t=>t.id === parseInt(req.params.id)); 
    if(todoIndex === -1){
        res.status(404).send();
    }else{
        todo.splice(todoIndex,1);
        res.status(200).send();
        res.json({
            msg:"done"
        })
    }
});

app.listen(3000);
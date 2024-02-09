const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const users = [{
    id : userid ,
    todos:[{
        title : false,
    }]
}];

// listoftodo =[];

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const userTodos = users[0].todos;
    const todo = userTodos.find(item => item.id === todoId);

    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.get("/todos/:id",function(req,res){
    const johntodo = users[0].todo;
    const numberoftodo = johntodo.length;
    let numberoffinishedtask =0;
    for(let i = 0;i<johntodo.length;i++){
        // !johntodo[i].title checks if the title property is falsy (empty string, undefined, null, false, etc.).
        if(johntodo[i].title){
            numberoffinishedtask=numberoffinishedtask+1;
        }
    }
    const numberofUNfinishedtask = numberoftodo-numberoffinishedtask;
    res.json({
        numberoftodo, numberoffinishedtask,numberofUNfinishedtask  
    })

})

app.post("/",function(req,res){
    const task = req.body.task;
    users[0].todo.push({
        title: task
    })
    res.json({
        msg:"done!"
    })
})

app.put("/",function(req,res){
    for(let i =0; i<users[0].todo.length;i++){
        users[0].todo[i].title=true;
    }
    res.json({
        msg : "done"
    })
})

app.delete("/", function(req,res){
    const newtodo =[];
    for(let i=0;i<users[0].todo.length;i++){
        if(users[0].todo[i].healthy){
            newtodo.push({
                task:true
            })
        }
    }
    users[0].todo = newtodo;
    res.json({
        msg:"done"
    })
})

app.listen(3000)

// app.use(bodyParser.json());
  
// module.exports = app;
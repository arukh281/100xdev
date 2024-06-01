import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// todo: [{title: "todo1",description:"first todo",completeded;"false"}]

function App() {
  const [todo,settodo] = useState([{
    title:"go to gym",
    description: "at 7 pm",
    completed: false
  },{
    title:"dsa",
    description:"at 6pm",
    completed: false
  }]);

  function addtodo(){
    settodo([...todo,{
      // todo = [1,2]
      // [...todo,3] = [1,2,3]
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  return(
    <div>
    
    <button onClick={addtodo}>add a random todo</button>

    {/* <Todo title={todo[0].title} description={todo[0].description}/>
    <Todo title={todo[1].title} description={todo[1].description}/> */}

    {todo.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
    
    </div>
  )

  function Todo(props){
    return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    )
  }

}

export default App

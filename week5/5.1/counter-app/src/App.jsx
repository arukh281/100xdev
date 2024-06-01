import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const[count, setCount]=useState(0); //[1,2]

  

  return (
    //when we have render js variable inside html use use {}
    <CustomButton count={count} setCount={setCount}></CustomButton>
  )
}

function CustomButton(props){

  function onclick_handler(){
    props.setCount(props.count +1);
  }

  return <button onClick={onclick_handler}>
    counter {props.count}
  </button>
}

export default App

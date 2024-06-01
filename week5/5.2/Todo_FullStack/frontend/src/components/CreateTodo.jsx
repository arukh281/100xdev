import { useState } from "react";

export function CreateTodo(){
        const[title, settitle]= useState("");
        const[description, setdescription]= useState("");


        return(
        <div>
            <input id ="title"style={{
                padding: 10,
                margin:10
            }} type="text" placeholder="title" onChange={function(e){
                const value = e.target.value;
                settitle(e.target.value);
            }}/><br /><br />

            <input id="desc"style={{
                padding: 10,
                margin:10
            }} type="text" placeholder="description" onChange={function(e){
                const value = e.target.value;
                setdescription(e.target.value);
            }}/><br /><br />

            <button style={{
                padding: 10,
                margin:10
            }} onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body: JSON.stringify({
                        // title:document.getElementById(title).innerHTML, (this will work but nahi krna)
                        title: title,
                        description: description
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("todo added")
                    })  
            }}>Add a Todo</button>
        </div>)
}
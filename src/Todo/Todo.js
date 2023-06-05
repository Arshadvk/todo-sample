import React from 'react'
import {useState} from 'react'
import '../Todo/Todo.css'

function Todo() {
    const [toDos,setToDos ]=useState([])
  const [toDo ,setToDo] = useState('')
  const currentDate = new Date(); 

  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth(); 
  const day = currentDate.getDate(); 
  
  const options = { weekday: 'long' };
  const dayName = currentDate.toLocaleDateString('en-US', options); 


  const deleteTodo=id=>{
      console.log(id);
      
      const newToDos = toDos.filter(todo => todo.id !== id)
      setToDos(newToDos)
  }


  return (
    <div>
       
      <div className="subHeading">
      <h1>ToDo List</h1>
        <br />
        <h2> {` ${dayName} ${year}-${month + 1}-${day}`}</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)}  type="text" placeholder="🖊️ Add item..."  />
        <i onClick={()=>{
          if(toDo!=='')setToDos([...toDos ,{id : Date.now() , text :toDo , status : false }])
          setToDo('')
          
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if (obj2.id === obj.id) {
                  obj2.status = e.target.checked
                }
                return obj2 
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>deleteTodo(obj.id)} className="fas fa-times"></i>
          </div>
        </div>)
          })} 
          <div className='inner-box'>
          {toDos.map((obj)=>{
            if (obj.status) {
              return(<h1>{obj.text}</h1>)
            }
           return null 
          })}
      </div>
      </div>
    </div>
  )
}

export default Todo

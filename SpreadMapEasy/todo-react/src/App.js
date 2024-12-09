import { useState} from 'react';
import './App.css'

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (
    // Data JSX
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Ms Todo Application 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo}  onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
     { 
      toDos.map((value)=>{
      return(
      <div className="todo">
        <div className="left">
          <input value={value.status} onChange={(e)=>{
            console.log(e.target.checked)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===value.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} type="checkbox" name="" id="" />
          <p>{value.text}</p>
        </div>
        <div className="right">
          <i onClick={()=>{
            setTodos(toDos.filter((obj) => obj.text =""));
          }} className="fas fa-times"></i>
        </div>
      </div>)
    })}
    {/* Next map For Active Tasks */}
    {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text}</h1>)
      }
      return null
    })}
    <div>
    </div>
    </div>
    
  </div>
  );
}
export default App;


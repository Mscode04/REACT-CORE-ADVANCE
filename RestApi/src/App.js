
import axios from 'axios'
import {useState} from 'react'


function App() {
  const [state,setState]=useState([])
  return (
    // Data JSX
    <div className="">
        <h1>Rest Api</h1>
        <button onClick={()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
            setState(response.data)
          })
        }} >Click Me</button>
        {state.map((obj,index)=>{
          return(
            <duv>
              <h1>{index+1}</h1>
              <h2>{obj.title}</h2>
              <h4>{obj.body}</h4>
            </duv>
          )
        })}
    </div>
  );
}
export default App;


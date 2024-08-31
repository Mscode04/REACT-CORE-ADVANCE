
import {useState} from 'react'

import Employee from './Employee'

function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
  }
  let emp=[{name:'Fahiya',age:23},
            {name:'Murali',age:43},
            {name:'Shem',age:19},
            {name:'Sabi',age:20},
            {name:'Abhi',age:25}
  ]
  return (
    // Data JSX
    <div className="App">
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>(
            <Employee key={obj.index} {...obj}/>
          )
        )
      }
      
    </div>
  );
}
export default App;


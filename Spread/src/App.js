
import {useState} from 'react'
import Counter from './Counter'

function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
  }
  let obj1={title:'1st counter ',data:count,place:'malappuram'}
  return (
    // Data JSX
    <div className="App">
      <button onClick={addCount}>Add</button>
      <Counter {...obj1}/>
      <Counter title='2nd Counter ' data={count}/>
      
    </div>
  );
}
export default App;


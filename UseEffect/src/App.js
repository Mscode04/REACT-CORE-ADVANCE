
import {useState} from 'react'
import Counter from './Counter'

function App() {
  const [state,setState]=useState(0)
  return (
    // Data JSX
    <div className="App">
      <h1 onClick={()=>setState(!state)}>React App Main</h1>
      { state ? <Counter/> : null}
      

      
      
    </div>
  );
}
export default App;


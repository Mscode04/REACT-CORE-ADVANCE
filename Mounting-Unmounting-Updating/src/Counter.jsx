import React,{useState,useEffect} from 'react'
function Counter() {
  const [count1,setAdd]=useState(0)
  const [count2,setAdd2]=useState(0)
  useEffect(()=>{
    console.log("Mounting..")
    console.log("Updating.count1.."+count1)
    console.log("Updating.count2.."+count2)
    return ()=>{
      console.log("Clean"+count1,count2)
    }
  },[count1,count2])
  return (
    <div>
      <button onClick={()=>setAdd(count1+1)}>Add</button>
      <h1>Counter is {count1}</h1>
      <button onClick={()=>setAdd2(count2+1)}>Add</button>
      <h1>Counter is {count2}</h1>
    </div>
  )
}
export default Counter

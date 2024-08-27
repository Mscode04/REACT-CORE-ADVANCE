import React from 'react'

function Counter(props) {
  const {title,data}=props
  // also we can use {title,data} into Counter({title,data})
  return (
    <div>
      {/* <h1>{props.title}{props.data}</h1> */}
      {/* also we can use this like */}
      <h1>{title}{data}</h1>
    </div>
  )
}

export default Counter

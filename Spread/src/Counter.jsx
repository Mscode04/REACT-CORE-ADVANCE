import React from 'react'

function Counter({title,...obj1}) {

  // also we can use {title,data} into Counter({title,data})
  return (
    <div>
      <h1>{title}{obj1.data}</h1>
    </div>
  )
}

export default Counter

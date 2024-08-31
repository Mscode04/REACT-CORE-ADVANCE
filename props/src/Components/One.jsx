import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'yellow',width:'300px'}}>
        <h1>Layer One</h1>
        <Two data={props.data}></Two>
    </div>
  )
}

export default One

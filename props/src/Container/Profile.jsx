import React from 'react'
import One from '../Components/One'

function Profile(props) {
    return (
        <div style={{backgroundColor:'green',width:'500px'}}>
            <h1>Profile Page</h1>
            <One data={props.data}></One>
        </div>
    )
}

export default Profile

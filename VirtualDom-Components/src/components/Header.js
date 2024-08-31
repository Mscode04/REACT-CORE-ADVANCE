

// same header with class component

import { Component } from "react"

class Header extends Component{
    render(){
        return(<h1>Header {this.props.data}</h1>)
    } 
}
export default Header


//  functional component

// function Header(props){
//     return(<h1>Header {props.data}</h1>)
// }
// export default Header
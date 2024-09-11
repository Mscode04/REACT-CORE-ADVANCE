import React from 'react'

function My(props) {
    const {children}=props
    const link=window.location.href;
    const links=new URL(link).pathname.substring(1)
    console.log(links)
  return (
    <div>
      {React.Children.toArray(children).find((child)=>child.props.path===links)}
    </div>
  )
}

export default My

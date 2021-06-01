import React from 'react'
const Border = ({children}) => {
    return (
        <div style={{border:"1px solid black"}}>
           {children}
        </div>
    )
}

export default Border

import React from 'react'

function CoolButton(props) {
    return (
        
           <button type={props.type} className={ props.class }>{props.children}</button>

          )
}


export default CoolButton
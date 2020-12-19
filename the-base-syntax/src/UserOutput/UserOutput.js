import React from 'react'
import'./UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I'm {props.username}.</p>
            <p>Hello World!</p>
            
        </div>
    )
    
};

export default userOutput
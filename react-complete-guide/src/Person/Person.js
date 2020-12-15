import React from 'react'

const person = (props) => {
    //JS Code in JSX
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
        </div>
    )
    
};

export default person
import React from 'react';

export default function Shrunk(props){
    return(
        <div className="shrunk">
            <i onClick={props.handleClick} className="fas fa-plus"></i>
        </div>
    )
}

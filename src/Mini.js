import React from 'react';

const Mini = (props) => {
    return(
        <div>
            <i onClick={props.handleClick} className="fas fa-plus"></i>
        </div>
    )
}

export default Mini;
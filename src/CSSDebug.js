import React, { Component } from 'react'
import Draggable from 'react-draggable'
import Expand from './Expand'
import Shrunk from './Shrunk'
import {getElements} from './utils'
import {MINI, LARGE} from './Constants'
import './App.css'

class CSSDebug extends Component{
    constructor(props){
        super(props)
        this.state = {
            size: MINI,
            debug: getElements("lol")
        }
    }

    changeSize = () =>{
        this.setState({
            size: this.state.size === MINI ? LARGE : MINI
        })
    }

    render(){
        const {size} = this.state;
        return(
            <Draggable enableUserSelectHack={false}> 
                <div className='css-debugger'>
                    {size === MINI 
                    ? <Expand changeSize={this.changeSize}/>
                    : <Shrunk handleClick={this.changeSize}/>
                    }
                </div>
            </Draggable>
        )
    }
}

export default CSSDebug
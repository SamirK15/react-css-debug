import React, { Component } from 'react'
import Draggable from 'react-draggable'

import Large from './Large'
import Mini from './Mini'
import {getElements} from './utils'
import {MINI, LARGE} from './Constants'
import './App.css'

class RCD extends Component{
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
        console.log(this.state.debug);
    

        return(
            <Draggable>
            <div className='debugger'>
                {size === MINI ? <Large changeSize={this.changeSize}/>
                : <Mini handleClick={this.changeSize}/>
                }
            </div>
            </Draggable>
        )
    }
}

export default RCD
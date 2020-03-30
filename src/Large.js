import React, { Component } from 'react';

import './App.css'
import {ALL, CLASS, ID} from './Constants'
import { getElements } from './utils';

class Large extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected: '',
            search: '',
        }
    }

    changeSelect = (selected) => {
        this.setState({
            selected,
        })
    }

    changeSearch = (e) => {
        this.setState({
            search : e.target.value
        })
    }

    render(){
        const {selected, search} = this.state
        const cssElements = getElements(selected, search);
        return(
            <div className = 'large-size'>
                <div className = 'large-top-bar'>
                    <i onClick={this.props.changeSize}class="fas fa-minus"></i>
                </div>
                <div className = 'large-search-select'>
                    <div className="left-col">
                        <label>
                        Filter By : 
                        </label>
                    </div>
                    <div className="right-col"> 
                        <label onClick={this.changeSelect} value='id'> Id </label>
                        <label onClick={this.changeSelect} value='class'> Class </label>
                        <label onClick={this.changeSelect} value='all'> All </label>
                    </div> 
                    <div className='right-col'>
                        <input onChange={this.changeSearch}></input>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default Large
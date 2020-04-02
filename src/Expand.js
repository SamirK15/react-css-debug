import React, { Component } from 'react';
import {ALL, CLASS, ID} from './Constants'
import { getElements, getName } from './utils';
import './App.css'

class Expand extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected: '',
            search: '',
            elements: []
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

    toggleElement = (e) => {
        const {elements} = this.state;
        const removeElement = [];
        for(let i = 0; i < elements.length; i++){
            if(getName(e) === elements[i].name){
                console.log(elements[i].node.style)
                //research more on wiping cssText
                elements[i].node.style.cssText = '';
                continue;
            }
            removeElement.push(elements[i])
        }
        if (elements.length !== removeElement.length){
            this.setState({
                elements: removeElement
            })
        }
        else
        {
            //update to select css properties for debugging
            e.style.backgroundColor = "blue"
            elements.push({
                name : getName(e),
                node : e,
            })
            this.setState({
                elements 
            })
        }   
    }

    render(){
        const {selected, search} = this.state
        
        const cssElements = getElements(selected, search)
        let searchResults = []
        for(let i = 0; i < cssElements.length; i++){
            searchResults.push(cssElements[i])
        }
        return(
            <div className = 'large-size'>
                <div className = 'large-top-bar'>
                    <i onClick={this.props.changeSize} className="fas fa-minus"></i>
                </div>
                <div className = 'large-search-select'>
                    <div className="left-col">
                        <label>
                        Filter By : 
                        </label>
                    </div>
                    <div className="right-col"> 
                        <label onClick={() => this.changeSelect(ID)} value='id'> Id </label>
                        <label onClick={() => this.changeSelect(CLASS)} value='class'> Class </label>
                        <label onClick={() => this.changeSelect(ALL)} value='all'> All </label>
                    </div> 
                    <div className='right-col'>
                        {selected !== ALL
                        ? <input className="search" onChange={this.changeSearch}/>
                        : <input className="search"  disabled></input>
                        }
                    </div>
                    <div>
                        <ul>
                            {searchResults.map(e => <li className="search-results" onClick={() => this.toggleElement(e)} key={e}>{getName(e)}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default Expand
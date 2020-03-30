import {ALL, CLASS, ID} from './Constants'

export const getElements = (searchType, searchVal) => {
    let query = 0;
    switch(searchType){
        case ID:
            return document.querySelectorAll(`#${searchVal}`)
        case CLASS:
            return document.querySelectorAll(`.${searchVal}`)
        default:
            const rootElement = document.querySelector('#root');
            console.log(rootElement.children)

    }
}


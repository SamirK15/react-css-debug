import {ALL, CLASS, ID} from './Constants'

/**
 *  
 * @param {string} searchType Can only be a search type constant
 * @param {*} searchVal a class or id value that will be queried
 * @returns {NodeList} of the query results
 */
export const getElements = (searchType, searchVal) => {
    switch(searchType){
        case ID:
            if(searchVal === ""){
                return [];
            }
            return document.querySelectorAll(`#${searchVal}`)
        case CLASS:
            if(searchVal === ""){
                return [];
            }
            return document.querySelectorAll(`.${searchVal}`)
        default:
            const rootElement = document.querySelector('#root');
            return getNodes(rootElement);

    }
}
/**
 *
 * @param {NodeList} domNode a node
 * @returns {string} the formatted name of a nodelist
 */ 
export const getName = (domNode) => {
    if(domNode.nodeName === undefined || domNode.id === undefined || domNode.className === undefined){
        return "";
    }
    return domNode.nodeName + (domNode.id ? "-#" + domNode.id : "") + (domNode.className ? "-." + domNode.className : "");
    ;
}

/**
 * 
 * @param {NodeList} node a node 
 * @returns {Array} returns an array of a subtree with the parameter as the root
 */
const getNodes = (node) => {
    const arr = [];
    collectNodesInArray(node,arr);
    return arr;
}

/**
 * 
 * @param {NodeList} node the current node
 * @param {Array} arr the array holding all the nodes
 */
const collectNodesInArray = (node, arr) => {
    //skip the css-debugger tool
    if(node.className.includes('css-debugger')){
        return;
    }
    arr.push(node)
    for(let i = 0; i < node.children.length; i++){
        collectNodesInArray(node.children[i],arr);
    }
}





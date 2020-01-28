import _ from 'lodash';

class Collection{
    elements = [];
    /**
     * 
     * @param {string} name - name of collection 
     */
    constructor(name){
        this.name = name;    
        this._loadFromStorage();
    }

    find = (selector) => {
        return _.filter(this.elements, selector);
    }

    insert = (obj) => {
        this.elements = [...(this.elements),obj];

        this._saveToStorage();
    }

    remove = (obj) => {
        _.remove(this.elements, obj);
        this._saveToStorage();
    }

    _saveToStorage = () => {
        localStorage.setItem(`__collection__${this.name}`, JSON.stringify(this.elements));
    }

    _loadFromStorage = () => {
        this.elements =  JSON.parse(localStorage.getItem(`__collection__${this.name}`)) || [];
    }
}


export default Collection;
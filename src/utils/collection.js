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

    

    _saveToStorage = () => {
        localStorage.setItem(`__collection__${this.name}`, JSON.stringify(this.elements));
    }
    _loadFromStorage(){
        this.elements =  JSON.parse(localStorage.getItem(`__collection__${this.name}`));
    }
}


module.exports = Collection;
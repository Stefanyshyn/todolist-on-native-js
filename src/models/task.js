import _ from 'lodash';
import Collection from '../utils/collection';
class Task {
    collection = new Collection('task')

    get = (selector) => {
        console.log(selector);
        console.log(this.collection.find());
        console.log(this.collection.find(selector));
        
        return _.orderBy(this.collection.find(selector), ['date'], 'desc' );
        
    }
    
    insert = (task) => {
        console.log(task);
        return this.collection.insert(task);
    }

    remove = (task) => collection.remove(task);
}

export default new Task();
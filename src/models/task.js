import _ from 'lodash';
import Collection from '../utils/collection';
class Task {
    collection = new Collection('task')

    get = (selector) => {
        return _.orderBy(this.collection.find(selector));
    }
    
    insert = (task) => {
        console.log(task);
        return this.collection.insert(task);
    }

    remove = (task) => collection.remove(task);
}

export default new Task();
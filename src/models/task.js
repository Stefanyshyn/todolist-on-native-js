import _ from 'lodash';
import Collection from '../utils/collection';
class Task {
    collection = new Collection('task')

    get = (selector) => _.orderBy(this.collection.find(selector));
    
    insert = (task) => this.collection.insert(task);

    remove = (task) => collection.remove(task);
}

export default new Task();
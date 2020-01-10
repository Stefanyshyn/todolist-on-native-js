import _ from 'lodash';
import collection from '../utils/collection';
class Task {
    get = (selector) => _.orderBy(selector, ['DateEnd'], 'desc' );
    add = (task) => collection.insert(task);
    remove = (task) => collection.remove(task);
}
export default new Task();
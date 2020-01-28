import ModelTask from '../models/task'
import Task from '../components/Task';
import {refresh} from '../events/controlTaskFeed';

const loadTask = () => {
    const tasks = ModelTask.get();
    Task(tasks);
    refresh();
}

loadTask();

export default loadTask;
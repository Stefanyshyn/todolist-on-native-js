import ModelTask from '../models/task'
import Task from '../components/Task';
import {removeTask} from '../events/taskFeed';

const loadTask = () => {
    const tasks = ModelTask.get();
    Task(tasks);
}

loadTask();

export default loadTask;
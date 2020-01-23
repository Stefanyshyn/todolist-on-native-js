import ModelTask from '../models/task'
import Task from '../components/Task';
const loadTask = () => {
    const tasks = ModelTask.get();
    
    Task(tasks);
}

loadTask();

export default loadTask;
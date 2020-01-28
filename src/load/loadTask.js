import ModelTask from '../models/task'
import Task from '../components/Task';
import {degreeDeadlineTask} from '../events/controlTaskFeed';

const select = document.getElementById('select');

const loadTask = () => {
    const tasks = ModelTask.get();
    let selectValue = select.value;

    if(selectValue === 'Completed'){
        Task(tasks.filter((item)=>{
            return !item.active;
        }));
    }else if(selectValue === 'Unfinished'){
        Task(tasks.filter((item)=>{
            return item.active;
        }));
    }else {
        Task(tasks);
    }
    degreeDeadlineTask();
}

export {loadTask};
import moment from 'moment';
import ModelsTask from '../models/task';
import {removeTask,checkTask} from '../events/taskFeed';
import {degreeDeadlineTask} from '../events/controlTaskFeed';

const container = document.getElementById('task-container');
const checkboxs = document.getElementsByClassName('task-active');
const btns = document.getElementsByClassName('btn-task-revome');

const createTask = (_tasks) => {
    let tasksComponent = [];
    let tasks = _tasks;
    if(!Array.isArray(tasks))
        tasks = new Array(tasks);
    for(let item of tasks){
        let {taskBody, date} = item;
        const task = `<div class="task">
            <div class="task-active-column">
                <input type="checkbox" class="task-active">
            </div>
            <div class="task-body-column">
                <div>
                    ${taskBody}
                </div>
            </div>
            <div class="task-date-column">
                <span class="task-date">${moment(date).format('MM/DD/YYYY hh:mm A')}</span>
            </div>
            <div class="task-remove">
                <button class="btn-task-revome btn btn-danger">
                    Remove     
                </button>
            </div>
        </div>`;
        tasksComponent = [...tasksComponent, task];
    }
    if(!container) return;
    container.classList.remove('fade');
    tasksComponent.forEach((task)=>{
        container.innerHTML = task + container.innerHTML; 
    })
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', removeTask);
        checkboxs[i].addEventListener('change', checkTask);
    }

} 
export default createTask;
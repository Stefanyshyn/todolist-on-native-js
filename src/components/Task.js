import moment from 'moment';
import ModelsTask from '../models/task';
import {removeTask,checkTask} from '../events/taskFeed';

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
        const task = `<table class="task">
        <tr>
            <th class="task-active-column">
                <div>
                    <input type="checkbox" class="task-active">
                </div>
            </th>
            <th>
                <div class="task-body">
                    <p class="task-body">${taskBody}</p>
                </div>
            </th>
            <th class="task-date">
                <div>
                    <span>${moment(date).format('MM/DD/YYYY hh:mm A')}</span>
                </div>
            </th>
            <th class="task-remove">
                <div>
                    <button class='btn-task-revome btn btn-danger' type="button" >Remove</button> 
                </div>
            </th>
        </tr>
        </table>`;
        tasksComponent = [...tasksComponent, task];
    }
    
    console.log(1);
    if(!container) return;
    console.log(2);
    container.classList.remove('fade');
    tasksComponent.forEach((task)=>{
        container.innerHTML = task + container.innerHTML; 
    })
    console.log(3);
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', removeTask);
        checkboxs[i].addEventListener('change', checkTask);
    }
    console.log(4);
} 
export default createTask;
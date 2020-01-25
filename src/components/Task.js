import moment from 'moment';
import ModelsTask from '../models/task';
import {removeTask} from '../events/taskFeed';

const createTask = (_tasks) => {
    let i = 0;
    let tasksComponent = [];
    let tasks = _tasks;
    if(!Array.isArray(tasks))
        tasks = new Array(tasks);
    for(let item of tasks){
        let {taskBody, date} = item;
        let task = `<table class="task">
        <tr>
            <th class="task-active-column">
                <div>
                    <input type="checkbox">
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
                    <button class='btn-task-revome btn btn-danger' type="button" >Remove${i++}</button> 
                </div>
            </th>
        </tr>
        </table>`;
        tasksComponent = [...tasksComponent, task];
    }

    let container = document.getElementsByClassName('task-container');
    if(container && container.length > 0){
        container[0].classList.remove('fade');
        tasksComponent.forEach((task)=>{
            container[0].innerHTML = task + container[0].innerHTML; 
        })
        const btns = document.getElementsByClassName('btn-task-revome');
        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener('click', removeTask);
        }
    }
} 
export default createTask;
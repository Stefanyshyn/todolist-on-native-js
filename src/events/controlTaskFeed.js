import {loadTask} from '../load/loadTask';

const container = document.getElementById('task-container');
const dates = document.getElementsByClassName('task-date');

const DEADLINE_TIME_COMLETED = 2*60*60*1000;

const degreeDeadlineTask = (e)=>{
    const tasks = container.children;
    if(!tasks) return;
    for(let i = 0; i < tasks.length; ++i){
        let date = Date.now() + DEADLINE_TIME_COMLETED;
        let taskDate = new Date(dates[i].innerText).getTime();
        
        if(date > taskDate > Date.now()){
            tasks[i].classList.add('warning-deadline');
        }
        else if(Date.now() > taskDate)
        {
            tasks[i].classList.add('danger-deadline');
        }
    }
}

const changeTypeSelectTask = ()=>{
    refresh();
}

const refresh = ()=>{
    container.innerHTML = '';    
    loadTask();
    degreeDeadlineTask();
}

export {degreeDeadlineTask, refresh, changeTypeSelectTask};
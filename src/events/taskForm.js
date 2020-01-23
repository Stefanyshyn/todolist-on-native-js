import {Alert, addAlert} from '../components/Alert';
import Task from '../components/Task';
import ModelTask from '../models/task';

const addTask = ()=>{
    const btn = document.getElementById('btn-add-task');
    btn.addEventListener('click', (e)=>{        
        const _Alert = Alert();

        if(!_Alert instanceof HTMLDivElement)
        {
            return alert(_Alert);
        }

        let date = document.getElementById('task-date-input');
        date = new Date(date.value || 0);
        let taskBody = document.getElementById('task-body-input');
        taskBody = taskBody.value;

        if(isEmpty(taskBody)){
            return addAlert(document.getElementById('form-task'),Alert('alert-danger', 'Danger!!! Task describe is empty'));
        }else if(!checkingDate(date)){
            return addAlert(document.getElementById('form-task'),Alert('alert-danger', 'Danger!!! Date end task is empty or less now date'));
        }
        
        
        addAlert(document.getElementById('form-task'),Alert('alert-success', 'Successfull!'));
        Task({taskBody, date});
        ModelTask.insert({taskBody, date});
        return;
    })
}

const isEmpty = (task)=>{
    let length = new String(task).length;
    if(length === 0)
        return true; 
    return false; 
}

const checkingDate = (date) => {
    date.setSeconds(date.getSeconds() + 30);
    if(new Date(date).getTime() < Date.now())
        return false;
    return true;
}

(addTask());


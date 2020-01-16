import moment from 'moment';
import {Alert, addAlert} from '../components/Alert';

const addTask = ()=>{
    const btn = document.getElementById('btn-add');
    btn.addEventListener('click', (e)=>{        
        const _Alert = Alert();
        console.log('/');    
        if(!_Alert instanceof HTMLDivElement)
        {
            return alert(_Alert);
        }
        let date = document.getElementById('task-date-input');
        date = new Date(date.value || 0);
        
        console.log(isEmpty(), "***", !checkingDate(date));    
        
        if(isEmpty()){
            return addAlert(document.getElementById('form-task'),Alert('alert-danger', 'Danger!!! Task describe is empty'));
        }else if(!checkingDate(date)){
            return addAlert(document.getElementById('form-task'),Alert('alert-danger', 'Danger!!! Date end task is empty or less now date'));
        }
        return addAlert(document.getElementById('form-task'),Alert('alert-success', 'Successfull!'));
    })
}

const isEmpty = ()=>{
    const task = document.getElementById('task-body-input');
    let length = task.value.length;
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


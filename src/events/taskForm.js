import moment from 'moment';
import {Alert, addAlert} from '../components/Alert';

const addTask = ()=>{
    const btn = document.getElementById('btn-add');
    btn.addEventListener('click', (e)=>{        
        const _Alert = Alert();
        
        if(!_Alert instanceof HTMLDivElement)
            return alert(_Alert);
        
        if(isEmpty() && !checkingDate()){
            console.log(1);
            return addAlert(document.getElementById('form-task'),Alert('alert-danger', 'Error!!! Pleace, Fills all fields'));
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

const checkingDate = () => {
    const dateElement = document.getElementById('task-date-input');
    let date = new Date(dateElement.value || 0);
    date.setSeconds(date.getSeconds() + 30);

    if(new Date(date).getTime() < Date.now())
        return false;
    return true;
}

(addTask());


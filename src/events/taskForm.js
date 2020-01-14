import moment from 'moment';

const addTask = ()=>{
    const btn = document.getElementById('btn-add');
    btn.addEventListener('click', (e)=>{        
        if(isEmpty() && isDate()){
            console.log(1);
            document.getElementById('alert-input-error').setAttribute("show", "show");;
            return;
        }
        console.log(2);
        document.getElementById('alert-input-success').setAttribute("show", "show");;
    })
}

const isEmpty = ()=>{
    const task = document.getElementById('task-body-input');
    let length = task.value.length;
    if(length === 0)
        return true; 
    return false; 
}

const isDate = () => {
    const dateElement = document.getElementById('task-date-input');
    let date = new Date(dateElement.value || 0);
    date.setSeconds(date.getSeconds() + 30);

    if(new Date(date).getTime() < Date.now())
        return false;
    return true;
}

(addTask());

$('.alert').alert()
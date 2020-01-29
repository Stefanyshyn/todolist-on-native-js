import ModelsTask from '../models/task';
const select  = document.getElementById('select');
const container = document.getElementById('task-container');

const removeTask =(task)=>{
    return function(e){
        if(container.children.length === 1){
            container.classList.add('fade');
        }    
        let p = e.target.parentElement.parentElement.parentElement;
        let taskDom = e.target.parentElement.parentElement;        
        let active = taskDom.children[0].children[0].value;
        
        ModelsTask.remove({ id: task.id });
    }
};

const checkTask = (e)=>{
    if(!select) return;
    if(select.value.toString().toLowerCase() === 'unfinished'){
        const task = e.target.parentElement.parentElement;
        
        if (task && e.target.checked) {
            task.parentNode.removeChild(task);
        }
        if(container.children.length === 0 ){
            container.classList.add('fade');
        }
    }
}

export {removeTask,checkTask};
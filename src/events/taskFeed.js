import ModelsTask from '../models/task';
const select  = document.getElementById('select');
const container = document.getElementById('task-container');

const removeTask =(task)=>{
    return function(e){
        if(container.children.length === 1){
            container.classList.add('fade');
        }    
        let taskDom = e.target.parentElement.parentElement;        

        container.removeChild(taskDom);        
        ModelsTask.remove({ id: task.id });
    }
};

const checkTask = (task)=>{
    return(e)=>{
        let taskActive = e.target.checked;
        
        if(!select) return;
        if(select.value === 'Unfinished' && select.value === 'Completed'){
            const task = e.target.parentElement.parentElement;
            if (task && taskActive) {
                task.parentNode.removeChild(task);
            }
            if(container.children.length === 0 ){
                container.classList.add('fade');
            }
        }
        ModelsTask.edit({id:task.id}, {active: !taskActive})
    }
}

export {removeTask,checkTask};
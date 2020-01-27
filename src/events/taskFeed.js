const select  = document.getElementById('select');
const container = document.getElementById('task-container');
const btns = document.getElementsByClassName('btn-task-revome');

const removeTask = function(e){
    if(container.length === 1){
        container.classList.add('fade');
    }
    let p = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let c = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;        
    p.removeChild(c);
};

const checkTask = (e)=>{
    if(!select) return;
    if(select.value.toString().toLowerCase() === 'unfinished'){
        if(container.length === 1){
            container.classList.add('fade');
        }
        const task = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (task) {
            task.parentNode.removeChild(task);
        }
    }
}

const degreeDeadlineTask = ()=>{

}

export {removeTask,checkTask};
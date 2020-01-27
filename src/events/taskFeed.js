const select  = document.getElementById('select');
const container = document.getElementById('task-container');
const date = document.getElementById('task-date');

const removeTask = function(e){
    if(container.children.length === 1){
        container.classList.add('fade');
    }    
    let p = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let c = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;        
    p.removeChild(c);
};

const checkTask = (e)=>{
    if(!select) return;
    if(select.value.toString().toLowerCase() === 'unfinished'){
        const task = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        
        if (task && !e.target.checked) {
            task.parentNode.removeChild(task);
        }
        
        if(container.children.length === 0 ){
            container.classList.add('fade');
        }        
    }
}

const degreeDeadlineTask = (e)=>{
    const tasks = container.children;
    if(!tasks) return;
    for(let i = 0; i < tasks.length; ++i)
    {
        console.log(Date(date[i]));
        if(1)
        tasks[i]
    }
}

export {removeTask,checkTask, degreeDeadlineTask};
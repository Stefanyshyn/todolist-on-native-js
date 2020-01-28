const select  = document.getElementById('select');
const container = document.getElementById('task-container');

const removeTask = function(e){
    if(container.children.length === 1){
        container.classList.add('fade');
    }    
    let p = e.target.parentElement.parentElement.parentElement;
    let c = e.target.parentElement.parentElement;        
    p.removeChild(c);
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
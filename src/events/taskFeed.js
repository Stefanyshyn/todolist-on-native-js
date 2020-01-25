const removeTask = function(e){
    const btns = document.getElementsByClassName('btn-task-revome');
    if(btns.length === 1){
        const container = document.getElementsByClassName('task-container');
        container[0].classList.add('fade');
    }
    let p = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let c = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;        
    p.removeChild(c);
};

export {removeTask};
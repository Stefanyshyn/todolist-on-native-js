const Alert = (typeAlert, innerText) =>{
    let Alert = document.createElement('div');
    Alert.classList.add('alert');
    Alert.classList.add('show');
    Alert.classList.add(typeAlert);

    let A = document.createElement('a');
    A.classList.add('close');
    A.setAttribute('href', '#')
    A.setAttribute('data-dismiss', 'alert')
    A.setAttribute('aria-label', 'close')
    A.innerHTML = '&times;';
    
    let Strong = document.createElement('strong');
    Strong.innerText = innerText;

    A.append(Strong);
    Alert.append(A);

    return Alert;
}

const addAlert = (element, ...appends) => {
        if(element instanceof HTMLElement)
        {
            if(element == document.getElementById('form-task'))
            console.log(1);
            if(element === document.getElementById('form-task'))
            console.log(2);
            appends.map((item)=>{
            if(item instanceof HTMLElement || item instanceof string)
                    element.appendChild(item);
            });
        }            
};


addAlert(1);
export {Alert, addAlert};
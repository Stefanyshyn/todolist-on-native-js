const Alert = (typeAlert, innerText) =>{
    let Alert = document.createElement('div');
    Alert.classList.add('alert');
    Alert.classList.add('show');
    Alert.classList.add('alert-dismissible');
    Alert.classList.add(typeAlert);

    let A = document.createElement('a');
    A.classList.add('close');
    A.classList.add('alert-link');
    A.setAttribute('href', '#')
    A.setAttribute('data-dismiss', 'alert')
    A.setAttribute('aria-label', 'close')
    A.innerHTML = '&times;';
    
    let Text = document.createElement('p');
    Text.innerHTML = innerText;

    Alert.append(A);
    Alert.append(innerText);

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

export {Alert, addAlert};
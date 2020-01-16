import _ from 'lodash';

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

const addAlert = (parent, ...appends) => {
    if(parent instanceof HTMLElement)
    {
        let b = document.querySelector('#form-task .alert');
        if(b)
        console.log(
            b.remove()
        );
        let a = _.remove(new Array(...parent), (item)=>{
            return item.classList.contains('alert');
        });

        if(parent === document.getElementById('form-task'))
        {
            appends.forEach((item)=>{
            if(item instanceof HTMLElement || item instanceof string)
                parent.appendChild(item);
            });
        }
    }            
};

export {Alert, addAlert};
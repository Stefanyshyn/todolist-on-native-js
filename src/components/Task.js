import moment from 'moment';

const createTask = (task) => {
    const [taskBody, date] = task;    
    console.log(task);
    console.log(taskBody, "   ", date);
    let a = `<table class="task">
        <tr>
            <th class="task-active-column">
                <div>
                    <input type="checkbox">
                </div>
            </th>
            <th>
                <div class="task-body">
                    <p class="task-body">${taskBody}</p>
                </div>
            </th>
            <th>
                <div class="task-date">
                    <span>${moment(date).format('MM/DD/YYYY hh:mm A')}</span>
                    </div>
            </th>
        </tr>
    </table>`;
    let container = document.getElementsByClassName('task-container');
    console.log(container);
    if(container && container.length >= 0)
    {
        console.log(container[0]
        .innerHTML += a);  
    }
}

export default createTask;
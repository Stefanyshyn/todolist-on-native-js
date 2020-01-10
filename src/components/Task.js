const createTask = () => {
    
    let task = document.createElement('table');
     task.classList.add('task');
     console.log(1);
      console.log(document.getElementsByClassName('task-container').append(task));  
}

(createTask());


/*
<table class="task">
    <tr>
        <th class="task-active-column">
            <div>
                <input type="checkbox">
            </div>
        </th>
        <th>
            <div class="task-body">
                <p class="task-body">Do something Do something Do something Do something Do something Do something Do something Do something Do something Do something</p>
            </div>
        </th>
        <th>
            <div class="task-date">
                <span>12/25/2019 12:28 PM</span>
            </div>
        </th>
    </tr>
</table>
*/
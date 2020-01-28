import {loadTask} from './loadTask';
import {changeTypeSelectTask, refresh} from '../events/controlTaskFeed';

const select = document.getElementById('select-feed-task');
const btnRefresh = document.getElementById('btn-refresh');

select.addEventListener('change', changeTypeSelectTask);
btnRefresh.addEventListener('click', refresh);

loadTask();

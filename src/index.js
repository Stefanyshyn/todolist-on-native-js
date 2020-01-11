import server from './utils/datepicker';
import faker from 'faker';
import ModelTask from './models/task';

ModelTask.insert({id:faker.random.uuid()});
import { combineReducers } from 'redux';
import { users } from './adduser';
import { getusers } from './user';
import { paginations } from './pagination';
import { editusers } from './edituser';
export default combineReducers ({
    users,
    getusers,
    paginations,
    editusers
})
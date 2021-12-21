import { combineReducers } from 'redux';
import { users } from './adduser';
import { getusers } from './user';
import { paginations } from './pagination';
export default combineReducers ({
    users,
    getusers,
    paginations,
})
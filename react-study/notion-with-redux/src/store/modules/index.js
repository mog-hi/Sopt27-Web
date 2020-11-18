import { combineReducers } from 'redux';
import memberDetail from './memberDetail';
import member from './member';

export default combineReducers({
    memberDetail,
    member,
});
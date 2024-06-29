import { combineReducers } from 'redux';
import customerReducer from './CustomerReducer';

const rootReducer = combineReducers({
    customer: customerReducer,
});

export default rootReducer;
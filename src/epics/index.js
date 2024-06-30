import { combineEpics } from 'redux-observable';
import customerEpic from './CustomerEpic';
import fetchCustomerPersonalDataEpic from './CustomerPersonalDataEpic';

const rootEpic = combineEpics(
    customerEpic,
    fetchCustomerPersonalDataEpic
);

export default rootEpic;
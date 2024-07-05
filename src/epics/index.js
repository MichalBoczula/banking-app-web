import { combineEpics } from 'redux-observable';
import customerEpics from './CustomerEpic';
import addressEpics from './AddressEpic';

const rootEpic = combineEpics(
    customerEpics,
    addressEpics
);

export default rootEpic;
import { combineEpics } from 'redux-observable';
import customerEpics from './CustomerEpic';

const rootEpic = combineEpics(
    customerEpics,
);

export default rootEpic;
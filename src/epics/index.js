import { combineEpics } from 'redux-observable';
import customerEpic from './CustomerEpic';

const rootEpic = combineEpics(
    customerEpic,
);

export default rootEpic;
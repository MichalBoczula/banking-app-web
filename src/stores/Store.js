import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import customerReducer from '../slices/CustomerSlice';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: {
        customer: customerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export default store;
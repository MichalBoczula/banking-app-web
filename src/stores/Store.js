import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import customerReducer from '../slices/CustomerSlice';
import addressReducer from '../slices/AddressSlice';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: {
        customer: customerReducer,
        address: addressReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export default store;
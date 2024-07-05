// src/epics/customerEpics.js
import { ofType, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    fetchCustomerAccountsRequest,
    fetchCustomerAccountsSuccess,
    fetchCustomerAccountsFailure,
    fetchCustomerPersonalDataRequest,
    fetchCustomerPersonalDataSuccess,
    fetchCustomerPersonalDataFailure
} from '../slices/CustomerSlice';

const fetchCustomerAccountsEpic = (action$) =>
    action$.pipe(
        ofType(fetchCustomerAccountsRequest.type),
        switchMap(action =>
            ajax.getJSON(`http://localhost:8080/CustomerData/CustomerAccounts/${action.payload}`).pipe(
                map(response => {
                    console.log('API response:', response); // Log the response
                    return fetchCustomerAccountsSuccess(response);
                }),
                catchError(error => of(fetchCustomerAccountsFailure(error.message)))
            )
        )
    );

const fetchCustomerPersonalDataEpic = (action$) =>
    action$.pipe(
        ofType(fetchCustomerPersonalDataRequest.type),
        switchMap(action =>
            ajax.getJSON(`http://localhost:8080/CustomerData/CustomerPersonalData/${action.payload}`).pipe(
                map(response => fetchCustomerPersonalDataSuccess(response)),
                catchError(error => of(fetchCustomerPersonalDataFailure(error.message)))
            )
        )
    );

const customerEpics = combineEpics(
    fetchCustomerAccountsEpic,
    fetchCustomerPersonalDataEpic
);

export default customerEpics;

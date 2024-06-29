import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchCustomerAccountsRequest, fetchCustomerAccountsSuccess, fetchCustomerAccountsFailure } from '../actions/CustomerActions';

const customerEpic = (action$) =>
    action$.pipe(
        ofType('FETCH_CUSTOMER_ACCOUNTS_REQUEST'),
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

export default customerEpic;
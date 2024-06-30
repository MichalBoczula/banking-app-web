import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    fetchCustomerPersonalDataRequest,
    fetchCustomerPersonalDataSuccess,
    fetchCustomerPersonalDataFailure
} from '../actions/CustomerActions';

const fetchCustomerPersonalDataEpic = (action$) =>
    action$.pipe(
        ofType('FETCH_CUSTOMER_PERSONAL_DATA_REQUEST'),
        switchMap(action =>
            ajax.getJSON(`http://localhost:8080/CustomerData/CustomerPersonalData/${action.payload}`).pipe(
                map(response => fetchCustomerPersonalDataSuccess(response)),
                catchError(error => of(fetchCustomerPersonalDataFailure(error.message)))
            )
        )
    );

export default fetchCustomerPersonalDataEpic;
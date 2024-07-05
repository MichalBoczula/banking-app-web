import { ofType, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    fetchAddressByIdRequest,
    fetchAddressByIdSuccess,
    fetchAddressByIdFailure
} from '../slices/AddressSlice';

const fetchAddressByIdEpic = (action$) =>
    action$.pipe(
        ofType(fetchAddressByIdRequest.type),
        switchMap(action => {
            return ajax.getJSON(`http://localhost:8080/Address/${action.payload}`).pipe(
                tap(response => console.log('API response:', response)),
                map(response => fetchAddressByIdSuccess(response)),
                catchError(error => {
                    console.error('API error:', error);
                    return of(fetchAddressByIdFailure(error.message));
                })
            );
        })
    );

// const addAddressEpic = (action$) =>
//     action$.pipe(
//         ofType(addAddressRequest.type),
//         switchMap(action =>
//             ajax.post('http://localhost:8080/Address', action.payload, { 'Content-Type': 'application/json' }).pipe(
//                 map(response => addAddressSuccess(response.response)),
//                 catchError(error => of(addAddressFailure(error.message)))
//             )
//         )
//     );

// const updateAddressEpic = (action$) =>
//     action$.pipe(
//         ofType(updateAddressRequest.type),
//         switchMap(action =>
//             ajax.put(`http://localhost:8080/Address/${action.payload.id}`, action.payload, { 'Content-Type': 'application/json' }).pipe(
//                 map(response => updateAddressSuccess(response.response)),
//                 catchError(error => of(updateAddressFailure(error.message)))
//             )
//         )
//     );

// const deleteAddressEpic = (action$) =>
//     action$.pipe(
//         ofType(deleteAddressRequest.type),
//         switchMap(action =>
//             ajax.delete(`http://localhost:8080/Address/${action.payload}`).pipe(
//                 map(() => deleteAddressSuccess(action.payload)),
//                 catchError(error => of(deleteAddressFailure(error.message)))
//             )
//         )
//     );

const addressEpics = combineEpics(
    fetchAddressByIdEpic
);

export default addressEpics;
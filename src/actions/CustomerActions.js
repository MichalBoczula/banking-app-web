export const fetchCustomerAccountsRequest = (customerId) => ({
    type: 'FETCH_CUSTOMER_ACCOUNTS_REQUEST',
    payload: customerId,
});

export const fetchCustomerAccountsSuccess = (accounts) => ({
    type: 'FETCH_CUSTOMER_ACCOUNTS_SUCCESS',
    payload: accounts,
});

export const fetchCustomerAccountsFailure = (error) => ({
    type: 'FETCH_CUSTOMER_ACCOUNTS_FAILURE',
    payload: error,
});

export const fetchCustomerPersonalDataRequest = (customerId) => ({
    type: 'FETCH_CUSTOMER_PERSONAL_DATA_REQUEST',
    payload: customerId,
});

export const fetchCustomerPersonalDataSuccess = (personalData) => ({
    type: 'FETCH_CUSTOMER_PERSONAL_DATA_SUCCESS',
    payload: personalData,
});

export const fetchCustomerPersonalDataFailure = (error) => ({
    type: 'FETCH_CUSTOMER_PERSONAL_DATA_FAILURE',
    payload: error,
});
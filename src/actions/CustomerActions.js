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
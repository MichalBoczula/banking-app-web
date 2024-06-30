const initialState = {
    loading: false,
    accounts: [],
    personalData: null,
    error: ''
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMER_ACCOUNTS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_CUSTOMER_ACCOUNTS_SUCCESS':
            return {
                ...state,
                loading: false,
                accounts: action.payload.bankingAccounts
            };
        case 'FETCH_CUSTOMER_ACCOUNTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'FETCH_CUSTOMER_PERSONAL_DATA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_CUSTOMER_PERSONAL_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                personalData: action.payload
            };
        case 'FETCH_CUSTOMER_PERSONAL_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default customerReducer;
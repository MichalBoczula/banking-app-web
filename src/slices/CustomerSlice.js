import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    accounts: [],
    personalData: null,
    error: '',
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        fetchCustomerAccountsRequest: (state) => {
            state.loading = true;
        },
        fetchCustomerAccountsSuccess: (state, action) => {
            state.loading = false;
            state.accounts = action.payload.bankingAccounts;
        },
        fetchCustomerAccountsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchCustomerPersonalDataRequest: (state) => {
            state.loading = true;
        },
        fetchCustomerPersonalDataSuccess: (state, action) => {
            state.loading = false;
            state.personalData = action.payload;
        },
        fetchCustomerPersonalDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCustomerAccountsRequest,
    fetchCustomerAccountsSuccess,
    fetchCustomerAccountsFailure,
    fetchCustomerPersonalDataRequest,
    fetchCustomerPersonalDataSuccess,
    fetchCustomerPersonalDataFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
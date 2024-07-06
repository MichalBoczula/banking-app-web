import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addresses: [],
    selectedAddress: null,
    loading: false,
    error: '',
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        fetchAddressByIdRequest: (state) => {
            state.loading = true;
        },
        fetchAddressByIdSuccess: (state, action) => {
            state.loading = false;
            state.selectedAddress = action.payload;
        },
        fetchAddressByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addAddressRequest: (state) => {
            state.loading = true;
        },
        addAddressSuccess: (state, action) => {
            state.loading = false;
            state.addresses.push(action.payload);
        },
        addAddressFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateAddressRequest: (state) => {
            state.loading = true;
        },
        updateAddressSuccess: (state, action) => {
            state.loading = false;
            const index = state.addresses.findIndex(address => address.id === action.payload.id);
            if (index !== -1) {
                state.addresses[index] = action.payload;
            }
        },
        updateAddressFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteAddressRequest: (state) => {
            state.loading = true;
        },
        deleteAddressSuccess: (state, action) => {
            state.loading = false;
            state.addresses = state.addresses.filter(address => address.id !== action.payload);
        },
        deleteAddressFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchAddressByIdRequest,
    fetchAddressByIdSuccess,
    fetchAddressByIdFailure,
    addAddressRequest,
    addAddressSuccess,
    addAddressFailure,
    updateAddressRequest,
    updateAddressSuccess,
    updateAddressFailure,
    deleteAddressRequest,
    deleteAddressSuccess,
    deleteAddressFailure,
} = addressSlice.actions;

export default addressSlice.reducer;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddressRequest } from '../../slices/AddressSlice';

const DeleteAddressForm = () => {
    const dispatch = useDispatch();
    const [addressId, setAddressId] = useState('');

    const handleChange = (e) => {
        setAddressId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteAddressRequest(addressId));
    };

    return (
        <>
            <h4>DeleteForm</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="addressId"
                    value={addressId}
                    onChange={handleChange}
                    placeholder="Enter Address ID"
                />
                <button type="submit">Delete Address</button>
            </form>
        </>
    );
};

export default DeleteAddressForm;
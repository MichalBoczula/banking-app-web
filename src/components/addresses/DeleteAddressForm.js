import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddressRequest, hideNotification } from '../../slices/AddressSlice';
import Notification from '../common/Notification';

const DeleteAddressForm = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.address.notification);
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
            <Notification message={notification.message} type={notification.type} onClose={() => dispatch(hideNotification())} />            <h4>AddAddressForm</h4>
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
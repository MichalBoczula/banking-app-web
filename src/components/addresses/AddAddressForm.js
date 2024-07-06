import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddressRequest } from '../../slices/AddressSlice';

const AddAddressForm = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postCode: '',
        buildingNumber: '',
        flatNumber: '',
        verificationStatus: 1,
        customerId: 0,
    });

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddressRequest(address));
    };

    return (
        <>
            <h4>AddAddressForm</h4>
            <form onSubmit={handleSubmit}>
                <input name="street" value={address.street} onChange={handleChange} placeholder="Street" />
                <input name="city" value={address.city} onChange={handleChange} placeholder="City" />
                <input name="postCode" value={address.postCode} onChange={handleChange} placeholder="Post Code" />
                <input name="buildingNumber" value={address.buildingNumber} onChange={handleChange} placeholder="Building Number" />
                <input name="flatNumber" value={address.flatNumber} onChange={handleChange} placeholder="Flat Number" />
                <select name="verificationStatus" value={address.verificationStatus} onChange={handleChange}>
                    <option value={1}>Verified</option>
                    <option value={0}>Unverified</option>
                </select>
                <input name="customerId" type="number" value={address.customerId} onChange={handleChange} placeholder="Customer ID" />
                <button type="submit">Add Address</button>
            </form>
        </>
    );
};

export default AddAddressForm;
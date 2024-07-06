import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddressRequest, fetchAddressByIdRequest } from '../../slices/AddressSlice';

const UpdateAddressForm = ({ addressId }) => {
    const dispatch = useDispatch();
    const { selectedAddress, loading, error } = useSelector(state => state.address);
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postCode: '',
        buildingNumber: '',
        flatNumber: '',
    });

    useEffect(() => {
        dispatch(fetchAddressByIdRequest(addressId));
    }, [dispatch, addressId]);

    useEffect(() => {
        if (selectedAddress) {
            setAddress({
                street: selectedAddress.street,
                city: selectedAddress.city,
                postCode: selectedAddress.postCode,
                buildingNumber: selectedAddress.buildingNumber,
                flatNumber: selectedAddress.flatNumber,
            });
        }
    }, [selectedAddress]);

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAddressRequest({ ...address, id: addressId }));
    };

    return (
        <>
            <h3>UpdateAddressForm</h3>
            <form onSubmit={handleSubmit}>
                <input name="street" value={address.street} onChange={handleChange} placeholder="Street" />
                <input name="city" value={address.city} onChange={handleChange} placeholder="City" />
                <input name="postCode" value={address.postCode} onChange={handleChange} placeholder="Post Code" />
                <input name="buildingNumber" value={address.buildingNumber} onChange={handleChange} placeholder="Building Number" />
                <input name="flatNumber" value={address.flatNumber} onChange={handleChange} placeholder="Flat Number" />
                <button type="submit">Update Address</button>
            </form>
        </>
    );
};

export default UpdateAddressForm;
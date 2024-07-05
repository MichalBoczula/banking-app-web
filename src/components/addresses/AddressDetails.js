import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAddressByIdRequest
} from '../../slices/AddressSlice';

const AddressDetails = ({ addressId }) => {
    const dispatch = useDispatch();
    const { selectedAddress, loading, error } = useSelector(state => state.address);

    useEffect(() => {
        dispatch(fetchAddressByIdRequest(addressId));
    }, [addressId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!selectedAddress) return <p>No address found.</p>;

    const statusMap = {
        1: 'Verified',
        0: 'Unverified'
    };

    return (
        <Card title="Address Details">
            <div className="p-field">
                <label>Street:</label>
                <div>{selectedAddress.street}</div>
            </div>
            <div className="p-field">
                <label>City:</label>
                <div>{selectedAddress.city}</div>
            </div>
            <div className="p-field">
                <label>Post Code:</label>
                <div>{selectedAddress.postCode}</div>
            </div>
            <div className="p-field">
                <label>Building Number:</label>
                <div>{selectedAddress.buildingNumber}</div>
            </div>
            <div className="p-field">
                <label>Flat Number:</label>
                <div>{selectedAddress.flatNumber}</div>
            </div>
            <div className="p-field">
                <label>Verification Status:</label>
                <Tag severity={selectedAddress.verificationStatus === 1 ? 'success' : 'warning'}>
                    {statusMap[selectedAddress.verificationStatus]}
                </Tag>
            </div>
        </Card>
    );
};

export default AddressDetails;
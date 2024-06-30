import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerAccountsRequest, fetchCustomerPersonalDataRequest } from '../../actions/CustomerActions';

const CustomerAccounts = ({ customerId }) => {
    const dispatch = useDispatch();
    const { loading, accounts, personalData, error } = useSelector(state => state.customer);

    useEffect(() => {
        dispatch(fetchCustomerAccountsRequest(customerId));
        dispatch(fetchCustomerPersonalDataRequest(customerId));
    }, [dispatch, customerId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {personalData && (
                <div>
                    <h2>Customer Personal Data</h2>
                    <p>Customer Number: {personalData.customerNumber}</p>
                    <h3>Addresses</h3>
                    <ul>
                        {personalData.addresses.map((address, index) => (
                            <li key={index}>
                                {address.street}, {address.city}, {address.postCode}, {address.buildingNumber}, {address.flatNumber}, Status: {address.verificationStatus}
                            </li>
                        ))}
                    </ul>
                    <h3>Emails</h3>
                    <ul>
                        {personalData.emails.map((email, index) => (
                            <li key={index}>
                                {email.address}, Status: {email.verificationStatus}
                            </li>
                        ))}
                    </ul>
                    <h3>Phones</h3>
                    <ul>
                        {personalData.phones.map((phone, index) => (
                            <li key={index}>
                                {phone.countryCode} {phone.number}, Status: {phone.verificationStatus}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <h2>Customer Accounts</h2>
            <ul>
                {accounts.map(account => (
                    <li key={account.accountNumber}>{account.accountNumber}: {account.balance}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerAccounts;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerAccountsRequest } from '../../actions/CustomerActions';

const CustomerAccounts = ({ customerId }) => {
    const dispatch = useDispatch();
    const { loading, accounts, error } = useSelector(state => state.customer);

    useEffect(() => {
        dispatch(fetchCustomerAccountsRequest(customerId));
    }, [dispatch, customerId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {Array.isArray(accounts) && accounts.length > 0 ? (
                <ul>
                    {accounts.map(account => (
                        <li key={account.accountNumber}>{account.accountNumber}: {account.balance}</li>
                    ))}
                </ul>
            ) : (
                <p>No accounts available.</p>
            )}
        </div>
    );
};

export default CustomerAccounts;
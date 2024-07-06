import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/Store';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CustomerAccounts from './components/customerAccounts/CustomerAccounts';
import AddressDetails from './components/addresses/AddressDetails';
import AddAddressForm from './components/addresses/AddAddressForm';
import UpdateAddressForm from './components/addresses/UpdateAddressForm';
import DeleteAddressForm from './components/addresses/DeleteAddressForm';

function App() {
  return (
    <Provider store={store}>
      <CustomerAccounts customerId="D5212365-524A-430D-AC75-14A0983EDF62" />
      <AddressDetails addressId={1} />
      <AddAddressForm />
      <UpdateAddressForm addressId={2} />
      <DeleteAddressForm />
    </Provider>
  );
}

export default App;
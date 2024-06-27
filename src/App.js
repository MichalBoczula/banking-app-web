// src/App.js
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './stores/BasicStore';
import { Button } from 'primereact/button';
import { increment, decrement } from './reducers/CounterReducer';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button label="Increment" icon="pi pi-plus" onClick={() => dispatch(increment())} />
      <Button label="Decrement" icon="pi pi-minus" onClick={() => dispatch(decrement())} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
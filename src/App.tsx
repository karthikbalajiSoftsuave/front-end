import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { RootRoutes } from './routing/routes';
import './App.css';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <RootRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

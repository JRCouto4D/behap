import React from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import './config/reactotronConfig';

import SignIn from './pages/auth/SignIn';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SignIn />
    </PersistGate>
  </Provider>
);

export default App;

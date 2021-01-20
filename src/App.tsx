import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { RootRouter } from './RootRouter';
import { store } from './stateManager';

const persistor = persistStore(store);

export const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <HelmetProvider>
          <RootRouter />
        </HelmetProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

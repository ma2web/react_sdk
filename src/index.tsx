import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider as TribeProvider } from '@tribeplatform/react-sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TribeProvider
      config={{
        baseUrl: 'https://app.tribe.so/graphql',
        networkDomain: 'react-sdk-tutorial.tribeplatform.com',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TribeProvider>
  </React.StrictMode>
);

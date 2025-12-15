import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import App from './App';

// Mengambil elemen 'root' dari index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Me-render komponen App ke dalam elemen root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

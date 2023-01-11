import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/cartcontext/CartContext';
import reportWebVitals from './reportWebVitals';
import { UtilProvider } from './context/utilcontext/UtilContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UtilProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UtilProvider>
  </React.StrictMode>
);

reportWebVitals();

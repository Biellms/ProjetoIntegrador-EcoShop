import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContext, CartProvider } from './contexts/CartContext/Cartcontext'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CartContext.Consumer> */}
            <App />
        {/* </CartContext.Consumer> */}
    </React.StrictMode>
)

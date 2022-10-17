import React, { useState } from 'react'

export const CartContext = React.createContext({})

export const CartProvider = (props) => {

    const [total, setTotal] = useState(0)

    function removeCarrinho() {
        if(total > 0) {
            setTotal(total - 1)
        }
    }

    const [cart, setCart] = useState([])

    function handleAddItemToCart(url, name, price) {
        const itemObject = { url, name, price}
        setCart([...cart, itemObject])
    }

    function handleRemoveItemFromCart(clickedItemIndex) {
        const filteredCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
        )
        setCart(filteredCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
        <CartContext.Provider value={{total, setTotal, removeCarrinho}}>
            {props.children}
        </CartContext.Provider>
    );
}
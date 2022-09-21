import { createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {

    const [cartTotal, setCartTotal] = useState(1)

    function handleAddCartTotal() {
        setCartTotal(cartTotal + 1)
    }

    function handleRemoveCartTotal() {
        if (cartTotal > 0) {
        setCartTotal(cartTotal - 1)
        }
    }

    function handleRemoveAllCartTotal() {
        if (cartTotal > 0) {
        setCartTotal(0)
        }
    }

    return (
        <CartContext.Provider value={{cartTotal, handleAddCartTotal, handleRemoveCartTotal, handleRemoveAllCartTotal}}>
            {children}
        </CartContext.Provider>
    );
}
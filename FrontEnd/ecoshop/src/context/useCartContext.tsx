import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
    return useContext(CartContext)
}
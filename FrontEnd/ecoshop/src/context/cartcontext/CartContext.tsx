import { useState, createContext, ReactNode } from "react";
import { Cart as ProdutoCarrinho, CartApi } from '../../types/types'
import { ToastInfo, ToastSuccess } from "../../components/styles/toast/Toasts";

const defaultValue = {
    carrinho: [],
    addProdutoCarrinho: () => { },
    removeProdutoCarrinho: () => { },
    clearAllCarrinho: () => { }
}

interface CarrinhoProps {
    carrinho: ProdutoCarrinho[],
    addProdutoCarrinho: (cart: CartApi) => void,
    removeProdutoCarrinho: (cart: CartApi) => void,
    clearAllCarrinho: () => void
}

export const CartContext = createContext<CarrinhoProps>(defaultValue)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([])

    const addProdutoCarrinho = (cart: Omit<ProdutoCarrinho, 'amount'>) => {
        const NOT_FOUND = -1
        const cartIndex = carrinho.findIndex((item) => cart.nomeProduto === item.nomeProduto)

        ToastSuccess(cart.nomeProduto + ' adicionado ao carrinho')

        if (cartIndex === NOT_FOUND) {

            const newCarrinho = {
                ...cart,
                amount: 1
            }
            setCarrinho((carts) => [newCarrinho, ...carts])
        } else {
            const carrinhoCopy = [...carrinho]
            setCarrinho(carrinhoCopy)
        }
    }

    const removeProdutoCarrinho = (cart: Omit<ProdutoCarrinho, 'amount'>) => {
        const cartIndex = carrinho.findIndex((item) => item.nomeProduto === cart.nomeProduto)
        const carrinhoCopy = [...carrinho]

        ToastInfo(cart.nomeProduto + ' removido do carrinho')

        if (carrinhoCopy[cartIndex].amount === 1) {
            const newCarrinho = carrinhoCopy.filter((item) => item.nomeProduto !== cart.nomeProduto)
            setCarrinho(newCarrinho)
        } else {
            carrinhoCopy[cartIndex].amount -= 1
            setCarrinho(carrinhoCopy)
        }
    }

    const clearAllCarrinho = () => {
        setCarrinho([])
    }

    return (
        <CartContext.Provider value={
            {
                carrinho,
                addProdutoCarrinho,
                removeProdutoCarrinho,
                clearAllCarrinho
            }
        }
        >
            {children}
        </CartContext.Provider>
    );
};
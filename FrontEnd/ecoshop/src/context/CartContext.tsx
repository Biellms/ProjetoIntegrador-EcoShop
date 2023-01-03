import { useState, createContext, ReactNode } from "react";
import { Cart as ProdutoCarrinho, CartApi } from '../types/types'
import { toast } from 'react-toastify';

const defaultValue = {
    carrinho: [],
    addProdutoCarrinho: () => { },
    removeProdutoCarrinho: () => { },
    clearAllCarrinho: () => { },
    open: false,
    openBackDrop: () => { },
    closeBackDrop: () => { },
    resp: 0,
    respValue: () => { }
}

interface CarrinhoProps {
    carrinho: ProdutoCarrinho[],
    addProdutoCarrinho: (cart: CartApi) => void,
    removeProdutoCarrinho: (cart: CartApi) => void,
    clearAllCarrinho: () => void,
    open: boolean,
    openBackDrop: () => void,
    closeBackDrop: () => void,
    resp: number,
    respValue: (r: number) => void
}

export const CartContext = createContext<CarrinhoProps>(defaultValue)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {

    // CARRINHO
    const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([])

    const addProdutoCarrinho = (cart: Omit<ProdutoCarrinho, 'amount'>) => {
        const NOT_FOUND = -1
        const cartIndex = carrinho.findIndex((item) => cart.nomeProduto === item.nomeProduto)

        toast.success(cart.nomeProduto + ' adicionado ao carrinho', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });

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

        toast.info(cart.nomeProduto + ' removido do carrinho', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });

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

    // BACKDROP
    const [open, setOpen] = useState(false)

    const openBackDrop = () => {
        setOpen(true)
    }

    const closeBackDrop = () => {
        setOpen(false)
    }

    // REQUISICAO
    const [resp, setResp] = useState(0)

    const respValue = (r: number) => {
        setResp(r)
    }

    return (
        <CartContext.Provider value={
            {
                carrinho,
                addProdutoCarrinho,
                removeProdutoCarrinho,
                clearAllCarrinho,
                open,
                openBackDrop,
                closeBackDrop,
                resp,
                respValue
            }
        }
        >
            {children}
        </CartContext.Provider>
    );
};
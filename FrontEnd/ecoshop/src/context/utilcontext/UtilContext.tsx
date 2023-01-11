import { useState, createContext, ReactNode } from "react";

const defaultValue = {
    backdrop: false,
    openBackDrop: () => { },
    closeBackDrop: () => { },
    respApi: 0,
    respApiValue: () => { },
    modal: false,
    modalValue: () => { }
}

interface utilProps {
    backdrop: boolean,
    openBackDrop: () => void,
    closeBackDrop: () => void,
    respApi: number,
    respApiValue: (r: number) => void
    modal: boolean,
    modalValue: () => void
}

export const UtilContext = createContext<utilProps>(defaultValue)

interface UtilProviderProps {
    children: ReactNode
}

export const UtilProvider = ({ children }: UtilProviderProps) => {

    // BACKDROP
    const [backdrop, setBackdrop] = useState(false)

    const openBackDrop = () => {
        setBackdrop(true)
    }

    const closeBackDrop = () => {
        setBackdrop(false)
    }

    // REQUISICAO
    const [respApi, setRespApi] = useState(0)

    const respApiValue = (r: number) => {
        setRespApi(r)
    }

    // MODAL STATUS
    const [modal, setModal] = useState(false)

    const modalValue = () => {
        if (modal) {
            setModal(false)
        } else {
            setModal(true)
        }
    }

    return (
        <UtilContext.Provider value={
            {
                backdrop,
                openBackDrop,
                closeBackDrop,
                respApi,
                respApiValue,
                modal,
                modalValue
            }
        }
        >
            {children}
        </UtilContext.Provider>
    );
};
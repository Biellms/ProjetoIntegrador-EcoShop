import React, { useState, createContext } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = (props) => {

    const [total, setTotal] = useState(0)
    const user = {
        name: 'Gabriel'
    }

    function removeTotal() {
        if(total > 0) {
            setTotal(total - 1)
        }
    }

    return (
        <AuthContext.Provider value={{total, setTotal, removeTotal, user}}>
            {props.children}
        </AuthContext.Provider>
    );
}
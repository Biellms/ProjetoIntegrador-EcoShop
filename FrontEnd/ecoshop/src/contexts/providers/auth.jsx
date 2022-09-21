import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {

    const [total, setTotal] = useState(0)

    function removeTotal() {
        if(total > 0) {
            setTotal(total - 1)
        }
    }

    return (
        <AuthContext.Provider value={{total, setTotal, removeTotal}}>
            {props.children}
        </AuthContext.Provider>
    );
}
import React, { useContext }  from "react";
import { AuthContext } from "../../contexts/providers/auth";
import './Home.css';

export const Home = () => {

    const { total, setTotal, removeTotal } = useContext(AuthContext)

    return(
        <main>
            <section className='main-section-1'>
                <div>
                    <h1 onClick={() => setTotal(total + 1)}>Adicionar ao carrinho</h1>
                </div>
                <div>
                    <h1 onClick={removeTotal}>Remover do carrinho</h1>
                </div>
            </section>
            <section className='main-section-2'>
                <div>
                    <h1 onClick={() => setTotal(0)}>Remover todo carrinho</h1>
                </div>
            </section>
        </main>
    );
}
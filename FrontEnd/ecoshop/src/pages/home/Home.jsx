import React, { useContext } from "react";
import { CartContext } from "../../contexts/providers/cartcontext";
import './Home.css';

export const Home = () => {

    const { total, setTotal, removeCarrinho } = useContext(CartContext)

    return(
        <main>
            <section className='main-section-1'>
                <div>
                    <h1 onClick={() => setTotal(total + 1)}>Adicionar ao carrinho</h1>
                </div>
                <div>
                    <h1 onClick={removeCarrinho}>Remover do carrinho</h1>
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
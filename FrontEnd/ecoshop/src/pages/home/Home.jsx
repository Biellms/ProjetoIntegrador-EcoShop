import React from "react";
import './Home.css';

export const Home = ({ handleAddCartTotal, handleRemoveCartTotal, handleRemoveAllCartTotal }) => {
    return(
        <main>
            <section className='main-section-1'>
                <div>
                    <h1 onClick={handleAddCartTotal}>Adicionar ao carrinho</h1>
                </div>
                <div>
                    <h1 onClick={handleRemoveCartTotal}>Remover do carrinho</h1>
                </div>
            </section>
            <section className='main-section-2'>
                <div>
                    <h1 onClick={handleRemoveAllCartTotal}>Remover todo carrinho</h1>
                </div>
            </section>
        </main>
    );
}
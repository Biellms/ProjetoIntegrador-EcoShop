import React, { useContext } from "react";
import { CartContext } from "../../contexts/providers/cartcontext";
import './Home.css';

export const Home = () => {

    const { total, setTotal, removeCarrinho } = useContext(CartContext)

    return (
        // <main>
        //     <section className='main-section-1'>
        //         <div>
        //             <h1 onClick={() => setTotal(total + 1)}>Adicionar ao carrinho</h1>
        //         </div>
        //         <div>
        //             <h1 onClick={removeCarrinho}>Remover do carrinho</h1>
        //         </div>
        //     </section>
        //     <section className='main-section-2'>
        //         <div>
        //             <h1 onClick={() => setTotal(0)}>Remover todo carrinho</h1>
        //         </div>
        //     </section>
        // </main>
        <>
            <section className="section-home">
                <div className="section-home-ecoshop">
                    <div className="ecoshop-logo">
                        <h1 className="ecoshop-h1">
                            <span className="ecoshop-h1-eco"> ECO</span>
                            <span className="ecoshop-h1-shop">SHOP</span></h1>
                        <img src="./img/logoEcoshop.png" alt="" className="ecoshop-img"/>
                    </div>
                    <span className="ecoshop-span">
                        E-Commerce de Produtos Sustentáveis
                    </span>   
                </div>

            </section>

            <section className="section-home">
                <div className="divHome">
                    <span className="spanHome">Efeito Parallax</span>
                    <p className="pHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>

            <section className="section-home">
                <h1 className="h1-Home">ECHOSHOP</h1>
            </section>

            <section className="section-home">
                <div className="divHome">
                    <span className="spanHome">Efeito Parallax</span>
                    <p className="pHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>
        </>
    );
}
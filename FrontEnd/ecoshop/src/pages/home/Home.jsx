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
            <section className="sectionHome">
                {/* <img src="../../../public/img/echoshop-intro.png" alt="" className="img-home"/> */}
                <h1 className="h1-Home">ECHOSHOP</h1>       
            </section>

            <section className="sectionHome">
                <div className="divHome">
                    <span className="spanHome">Efeito Parallax</span>
                    <p className="pHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>

            <section className="sectionHome">
                <h1 className="h1-Home">ECHOSHOP</h1>
            </section>

            <section className="sectionHome">
                <div className="divHome">
                    <span className="spanHome">Efeito Parallax</span>
                    <p className="pHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>
        </>
    );
}
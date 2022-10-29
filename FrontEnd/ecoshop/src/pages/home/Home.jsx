import React, { useContext } from "react";
import { CartContext } from "../../contexts/providers/cartcontext";
import './Home.css';
import './Media.css';

export const Home = () => {

    const { total, setTotal, removeCarrinho } = useContext(CartContext)

    return (
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
                <div className="div-home">
                    <span className="span-home">Efeito Parallax</span>
                    <p className="p-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>

            <section className="section-home">
                <h1 className="h1-home">ECHOSHOP</h1>
            </section>

            <section className="section-home">
                <div className="div-home">
                    <span className="span-home">Efeito Parallax</span>
                    <p className="p-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis ut molestias, deleniti assumenda similique atque voluptas harum sed ratione minus, perferendis dolore? Dolores quia assumenda ea iure fugiat recusandae?</p>
                </div>
            </section>
        </>
    );
}
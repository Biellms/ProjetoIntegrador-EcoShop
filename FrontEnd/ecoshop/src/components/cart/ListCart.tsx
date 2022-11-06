import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { TokenState } from '../../store/tokens/tokensReduce';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './ListCart.css'

export const ListCart = () => {

    const { carrinho, removeProdutoCarrinho, clearAllCarrinho } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate()

    useEffect(() => {
        if (token == '') {

            toast.error('Você precisa estar logado!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        setTotal(carrinho.reduce((acc, item) => (item.preco * item.amount) + acc, 0))
    }, [carrinho])

    return (
        <>
            <h2>CARRINHO | TOTAL: $ {total} | 
                <button onClick={() => clearAllCarrinho()}>
                Esvaziar carrinho
                </button></h2>
            <div className='container-list-cart'>
                {
                    carrinho.map((post) => (
                        <div>
                            <li>Nome Produto:{post.nomeProduto}</li>
                            <li>Descricao: {post.descricao}</li>
                            <li>Preço: {post.preco}</li>
                            <li>Categoria: {post.categoria?.nomeCategoria}</li>
                            <li>Vendedor: {post.usuario?.nome} </li>
                            <button onClick={() => removeProdutoCarrinho(post)}>remover</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
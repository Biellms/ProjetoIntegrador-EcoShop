import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../../context/CartContext';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './ListCart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';

export const ListCart = () => {

    const { carrinho, removeProdutoCarrinho, clearAllCarrinho } = useContext(CartContext)

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

    let carrinhoVazio;

    if (carrinho.length == 0) {
        carrinhoVazio =
            <div className='carrinho-header'>
                <h3 className='carrinho-nome'>CARRINHO VAZIO </h3>
            </div>
    }

    return (
        <>
            <div className='container-list-cart'>
                <div className='carrinho-header'>
                    <h3 className='carrinho-nome'>MEU CARRINHO</h3>
                    <Button onClick={() => clearAllCarrinho()} variant='outlined'>
                        Esvaziar carrinho
                    </Button>
                </div>
                {carrinhoVazio}
                {
                    carrinho.map((post) => (
                        <div className='carrinho'>
                            <div className='carrinho-img'>
                                <img src={post.imagem} alt="" />
                            </div>
                            <div className='carrinho-body'>
                                <div className='carrinho-body-info'>
                                    <div className='carrinho-nome-trash'>
                                        <span className='carrinho-nome'>
                                            {post.nomeProduto}
                                        </span>
                                        <IconButton
                                            size="small"
                                            color="default"
                                            onClick={() => removeProdutoCarrinho(post)}
                                        >
                                            <DeleteIcon fontSize='medium' />
                                        </IconButton>
                                    </div>
                                    <span className='carrinho-categoria text-color-verde-escuro'>
                                        {post.categoria?.nomeCategoria}
                                    </span>
                                    <p className='carrinho-p'>
                                        Vendedor: {post.usuario?.nome}
                                        <br /><br />
                                        {post.descricao}
                                    </p>
                                </div>
                                <div className='div-button-valor'>
                                    <span className='carrinho-valor'>$ {post.preco}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
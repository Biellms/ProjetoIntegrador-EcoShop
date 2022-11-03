import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import './ListaProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';

export const ListaProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    async function getProduto() {
        await busca('/produtos', setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado')

            navigate('/login')
        }
    }, [token])

    useEffect(() => {

        getProduto()

    }, [produto.length])

    return (
        <>
            {
                produto.map(post => (
                    <div className='card'>
                        <div className='card-img'>
                            <img src={post.imagem} alt="" />
                        </div>
                        <div className='card-body'>
                            <div className='card-body-info'>
                                <span className='card-nome-produto'>
                                    {post.nomeProduto}
                                </span>
                                <span className='card-categoria text-color-verde-escuro'>
                                    {post.categoria?.nomeCategoria}
                                </span>
                                <p className='card-p'>
                                    Vendedor: {post.usuario?.nome}
                                    <br /><br />
                                    {post.descricao}
                                </p>
                            </div>
                            <div className='div-button-valor'>
                                <Button variant='outlined'>Add to card</Button>
                                <span className='card-valor'>$ {post.preco}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
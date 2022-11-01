import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import './ListaUserProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';

export const ListaUserProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const id = useSelector<TokenState, TokenState["ids"]>(
        (state) => state.ids
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

    const listaProdutos = produto.filter(function (ele, pos) {
        if (ele.usuario?.id === id) {
          return produto.indexOf(ele) === pos;
        }
      })

    return (
        <>
            {
                listaProdutos.map(post => (
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
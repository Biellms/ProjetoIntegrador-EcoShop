import { useState, useEffect, useContext } from 'react'
import { Button } from '@mui/material';
import './ListaUserProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { busca } from '../../../service/Service';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DeleteProdutoResp } from '../deleteproduto/DeleteProdutoResp';
import { CartContext } from '../../../context/CartContext';

export const ListaUserProdutoResp = () => {

    const [produto, setProduto] = useState<Produto[]>([])

    const navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const id = useSelector<TokenState, TokenState["ids"]>(
        (state) => state.ids
    );

    async function getProduto() {
        try {
            openBackDrop()
            await busca('/produtos', setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }   
        }

        closeBackDrop()
    }

    useEffect(() => {

        getProduto()

    }, [produto.length])

    const listaProdutos = produto.filter(function (ele, pos) {
        if (ele.usuario?.id === id) {
            return produto.indexOf(ele) === pos;
        }
    })

    // BACKDROP
    const { openBackDrop, closeBackDrop } = useContext(CartContext)

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
                                <div className='card-body-info-vender'>
                                    <span className='card-nome-produto'>
                                        {post.nomeProduto}
                                    </span>
                                    <span className='card-nome-produto'>
                                        $ {post.preco}
                                    </span>
                                </div>
                                <span className='card-categoria text-color-verde-escuro'>
                                    {post.categoria?.nomeCategoria}
                                </span>
                                <p className='card-p'>
                                    Vendedor: {post.usuario?.nome}
                                    <br /><br />
                                    {post.descricao}
                                </p>
                            </div>
                            <div className='div-button-valor-vender'>
                                <Link to={`/editar/${post.id}`} className='link-decorator'>
                                    <Button variant='contained'>Editar</Button>
                                </Link>
                                <Link to={`/venderResp/${post.id}`} className='link-decorator'>
                                    <DeleteProdutoResp />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
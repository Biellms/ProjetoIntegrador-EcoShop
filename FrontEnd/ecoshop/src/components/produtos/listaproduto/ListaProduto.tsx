import { useState, useEffect, useContext } from 'react'
import { Button } from '@mui/material';
import './ListaProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate, useParams } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { CartContext } from '../../../context/CartContext';
import axios from 'axios';

export const ListaProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])
    const { addProdutoCarrinho, openBackDrop, closeBackDrop, resp, respValue } = useContext(CartContext)
    const { id, id2 } = useParams<{ id: string, id2: string }>();

    const navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
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

        respValue(0)
        closeBackDrop()
    }

    async function getProdutoPorCategoria() {
        try {
            openBackDrop()
            await busca(`/produtos/categoria/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error) {
            if (axios
                .isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }
        }

        respValue(0)
        closeBackDrop()
    }

    async function getProdutoPorNome() {
        try {
            openBackDrop()
            await busca(`/produtos/produto/${id}`, setProduto, {
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

        respValue(0)
        closeBackDrop()
    }

    async function getProdutoEntrePreco() {
        try {
            openBackDrop()
            await busca(`/produtos/preco_inicial/${id}/preco_final/${id2}`, setProduto, {
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

        respValue(0)
        closeBackDrop()
    }

    useEffect(() => {
        if (id === undefined) {
            getProduto()
        } else if (resp === 1) {
            getProdutoPorNome()
        } else if (resp === 2) {
            getProdutoEntrePreco()
        } else {
            getProdutoPorCategoria()
        }

    }, [id, id2])

    let listagem

    if (produto.length === 0) {
        listagem =
            <h2>
                <span className="card-nome-produto">
                    Nenhum resultado!
                </span>
            </h2>
    } else {
        listagem =
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
                            <Button variant='outlined' onClick={() => {
                                addProdutoCarrinho(post)
                            }}>
                                Add to card
                            </Button>
                            <span className='card-valor'>$ {post.preco}</span>
                        </div>
                    </div>
                </div>
            ))
    }

    return (
        <>
            {listagem}
        </>
    );
}
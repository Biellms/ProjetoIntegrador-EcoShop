import { useState, useEffect, useContext } from 'react'
import { Button } from '@mui/material';
import './ListaProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate, useParams } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { CartContext } from '../../../context/cartcontext/CartContext';
import { UtilContext } from '../../../context/utilcontext/UtilContext';
import axios from 'axios';

export const ListaProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])
    const { addProdutoCarrinho} = useContext(CartContext)
    const { openBackDrop, closeBackDrop, respApi, respApiValue } = useContext(UtilContext)
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

        respApiValue(0)
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

        respApiValue(0)
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

        respApiValue(0)
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

        respApiValue(0)
        closeBackDrop()
    }

    async function getProdutoPrecoMin() {
        try {
            openBackDrop()
            await busca(`/produtos/preco_maior/${id}`, setProduto, {
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

        respApiValue(0)
        closeBackDrop()
    }

    async function getProdutoPrecoMax() {
        try {
            openBackDrop()
            await busca(`/produtos/preco_menor/${id}`, setProduto, {
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

        respApiValue(0)
        closeBackDrop()
    }

    useEffect(() => {
        if (id === undefined) {
            getProduto()
        } else if (respApi === 1) {
            getProdutoPorNome()
        } else if (respApi === 2) {
            getProdutoEntrePreco()
        } else if (respApi === 3) {
            getProdutoPrecoMin()
        } else if (respApi === 4) {
            getProdutoPrecoMax()
        } else {
            getProdutoPorCategoria()
        }

    }, [id, id2])

    const imagem = (img: string) => {
        if (img === '') {
            return '../img/ProdutoNA.png'
        } else {
            return img
        }
    }

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
                        <img src={imagem(post.imagem)} alt="" />                     
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
                            <Button variant='outlined' size='small'
                                onClick={() => { addProdutoCarrinho(post) }}>
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
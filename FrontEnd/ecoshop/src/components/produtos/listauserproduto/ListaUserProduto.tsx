import { useState, useEffect, useContext } from 'react'
import './ListaUserProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { busca } from '../../../service/Service';
import { useNavigate } from 'react-router-dom';
import { DeleteProduto } from '../deleteproduto/DeleteProduto';
import axios from 'axios';
import { UtilContext } from '../../../context/utilcontext/UtilContext';
import { ModalPostProduto } from '../modalpostproduto/ModalPostProduto';

export const ListaUserProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])
    const { respApi, respApiValue, openBackDrop, closeBackDrop } = useContext(UtilContext)
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

        respApiValue(0)
        closeBackDrop()
    }

    useEffect(() => {
        getProduto()

    }, [produto.length])

    useEffect(() => {
        getProduto()

    }, [respApi])

    const imagem = (img: string) => {
        if (img === '') {
            return '../img/ProdutoNA.png'
        } else {
            return img
        }
    }

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
                            <img src={imagem(post.imagem)} alt="" />
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
                                    <ModalPostProduto idProduto={post.id} textModal={'Editar'}/>
                                    <DeleteProduto idProduto={post.id} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
import { useState, useEffect, useContext } from 'react'
import { Button } from '@mui/material';
import './ListaProduto.css'
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { CartContext } from '../../../context/CartContext';
import { toast } from 'react-toastify';

export const ListaProduto = () => {

    const [produto, setProduto] = useState<Produto[]>([])
    const { addProdutoCarrinho } = useContext(CartContext)

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

            toast.error('Usuário precisa estar logado!', {
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
        </>
    );
}
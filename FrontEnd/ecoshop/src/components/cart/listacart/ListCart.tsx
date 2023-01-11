import { useContext } from 'react'
import { CartContext } from '../../../context/cartcontext/CartContext';
import './ListCart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { ToastInfo } from '../../styles/toast/Toasts';

export const ListCart = () => {

    const { carrinho, removeProdutoCarrinho, clearAllCarrinho } = useContext(CartContext)

    let carrinhoVazio;

    if (carrinho.length == 0) {
        carrinhoVazio =
            <div className='carrinho-header'>
                <h3 className='carrinho-nome'>Carrinho vazio</h3>
            </div>
    }

    const clearCart = () => {
        clearAllCarrinho()
        ToastInfo('Carrinho esvaziado')
    }

    return (
        <>
            <div className='container-list-cart'>
                <div className='carrinho-header'>
                    <h3 className='carrinho-nome'>Meu carrinho</h3>
                    <Button onClick={clearCart} variant='outlined'>
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
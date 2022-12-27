import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import { SearchBar } from '../../components/styles/SearchBar';
import { CartContext } from '../../context/CartContext';
import Categoria from '../../models/Categoria';
import { busca } from '../../service/Service';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Comprar.css'

export const Comprar = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const { openBackDrop, closeBackDrop } = useContext(CartContext)

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    async function getCategoria() {
        try {
            openBackDrop()
            await busca('/categorias', setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error) {
            toast.error('Erro ao carregar informações!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
        
        closeBackDrop()
    }

    useEffect(() => {

        getCategoria()

    }, [categorias.length])

    return (
        <div className='container-comprar'>
            <div className='comprar-aside'>
                <div className='aside-titulo'>
                    <h3 className='aside-h3'>
                        ADICIONE AO CARRINHO
                    </h3>
                </div>
                <SearchBar />
                <div className='aside-filtros'>
                    <h3 className='aside-h3'>
                        Filtrar por categoria:
                    </h3>
                    <div className='aside-filtros-categorias'>
                        {
                            categorias.map(post => (
                                <span>
                                    {post.nomeCategoria}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='comprar-main'>
                <ListaProduto />
            </div>
        </div>
    );
}
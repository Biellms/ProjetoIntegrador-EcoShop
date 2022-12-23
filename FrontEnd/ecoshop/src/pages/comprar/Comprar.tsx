import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import { Borda } from '../../components/styles/border/Borda';
import { SearchBar } from '../../components/styles/SearchBar';
import Categoria from '../../models/Categoria';
import { busca } from '../../service/Service';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Comprar.css'

export const Comprar = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    async function getCategoria() {
        await busca('/categorias', setCategorias, {
            headers: {
                'Authorization': token
            }
        })
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
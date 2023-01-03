import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ListaCategoria } from '../../components/categorias/listacategoria/ListaCategoria';
import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import { SearchBar } from '../../components/styles/SearchBar';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Comprar.css'

export const Comprar = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    useEffect(() => {
        if (token === "") {

            navigate('/home')
        }
    }, [token])

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
                        Filtrar por categorias
                    </h3>
                    <div className='aside-filtros-categorias'>
                        <ListaCategoria />
                    </div>
                </div>
                <div className="aside-remover-filtros">
                    <Link to={`/comprar`}>
                        <Button variant='outlined'>Remover filtro</Button>
                    </Link>
                </div>
            </div>
            <div className='comprar-main'>
                <ListaProduto />
            </div>
        </div>
    );
}
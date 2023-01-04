import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { ListaCategoria } from '../../components/categorias/listacategoria/ListaCategoria';
import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import { SearchBar } from '../../components/searchbar/SearchBar';
import { SliderBar } from '../../components/slider/SliderBar';
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
                <div className='aside-filtros'>
                    <SearchBar />
                </div>
                <div className='aside-filtros'>
                    <h4 className='aside-h'>
                        Filtrar por categorias
                    </h4>
                    <div className='aside-filtros-categorias'>
                        <ListaCategoria />
                    </div>
                </div>
                <div className='aside-filtros'>
                    <h4 className='aside-h'>
                        Filtrar entre dois preços
                    </h4>
                    <div className='aside-filtros-precos'>
                        <SliderBar />
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
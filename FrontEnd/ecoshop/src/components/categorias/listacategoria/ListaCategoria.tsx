import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReduce';
import './ListaCategoria.css'

export const ListaCategoria = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    async function getCategoria() {
        try {
            await busca('/categorias', setCategorias, {
                headers: { 'Authorization': token }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }
        }
    }

    useEffect(() => {

        getCategoria()

    }, [categorias.length])

    return (
        <>
            {
                categorias.map(post => (
                    <Link to={`/comprar/${post.id}/filtro/&`}>
                        <span className='aside-filtros-span'>
                            {post.nomeCategoria}
                        </span>
                    </Link>
                ))
            }
        </>
    );
}
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InfoCart } from '../../components/cart/infocart/InfoCart';
import { ListCart } from '../../components/cart/listacart/ListCart';
import { ToastError } from '../../components/styles/toast/Toasts';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Carrinho.css'

export const Carrinho = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate()

    useEffect(() => {
        if (token == '') {

            navigate('/home')
        }
    }, [token])

    return(
        <div className='container-carrinho'>
            <ListCart/>
            <InfoCart/>
        </div>
    );
}
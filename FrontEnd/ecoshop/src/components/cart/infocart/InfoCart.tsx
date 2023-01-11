import { Button, IconButton } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/cartcontext/CartContext';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './InfoCart.css'
import { FormatCurrency } from '../../../utils/FormatCurrency';
import { SelectPayment } from '../../styles/SelectPayment';

export const InfoCart = () => {

    const { carrinho } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(carrinho.reduce((acc, item) => (item.preco * item.amount) + acc, 0))
    }, [carrinho])

    return (
        <div className='container-infocart'>
            <div className='infocart-info'>
                <h3 className='carrinho-nome'>Total</h3>
                <h3 className='carrinho-nome'>{FormatCurrency(total)}</h3>
            </div>
            <hr />
            <div className='infocart-info'>
                <span className='carrinho-nome'>Quantidade de itens</span>
                <span className='carrinho-nome'>{carrinho.length}</span>
            </div>
            <div className=''>
                <span className='carrinho-nome'>Delivery</span>
                <IconButton size="small" color="default" >
                    <InfoOutlinedIcon />
                </IconButton>
            </div>
            <div className='infocart-payment'>
                <SelectPayment />
            </div>
            <div className='infocart-button'>
                <Button variant='contained' fullWidth>Comprar</Button>
            </div>
        </div>
    );
}
import { InfoCart } from '../../components/cart/infocart/InfoCart';
import { ListCart } from '../../components/cart/listacart/ListCart';
import './Carrinho.css'

export const Carrinho = () => {

    return(
        <div className='container-carrinho'>
            <ListCart/>
            <InfoCart/>
        </div>
    );
}
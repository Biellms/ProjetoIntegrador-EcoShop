import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import './Comprar.css'

export const Comprar = () => {
    return(
        <div className='container-comprar'>
            <div className='comprar-aside'>
                <h3 className='aside-h3'>
                    COMPRAR
                </h3>
            </div>
            <div className='comprar-main'>
                <ListaProduto />
            </div>
        </div>
    );
}
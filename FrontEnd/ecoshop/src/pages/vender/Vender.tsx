import { ModalPostProduto } from '../../components/produtos/modalpostproduto/ModalPostProduto';
import './Vender.css'
import { ListaUserProduto } from '../../components/produtos/listauserproduto/ListaUserProduto';


export const Vender = () => {

    return (
        <div className='container-vender'>
            <div className='vender-aside'>
                <h3 className='aside-h3'>
                    SEUS PRODUTOS
                </h3>
                <ModalPostProduto />
            </div>
            <div className='vender-main'>
                <ListaUserProduto/>
            </div>
        </div>
    );
}
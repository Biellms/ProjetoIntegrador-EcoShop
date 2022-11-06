import { ListaUserProdutoResp } from '../../components/produtos/listauserproduto/ListaUserProdutoResp';
import { ModalPostProdutoResp } from '../../components/produtos/modalpostproduto/ModalPostProdutoResp';
import './Vender.css'

export const VenderResp = () => {
    return (
        <div className='container-vender'>
            <div className='vender-aside'>
                <h3 className='aside-h3'>
                    SEUS PRODUTOS
                </h3>
                <ModalPostProdutoResp />
            </div>
            <div className='vender-main'>
                <ListaUserProdutoResp />
            </div>
        </div>
    );
}
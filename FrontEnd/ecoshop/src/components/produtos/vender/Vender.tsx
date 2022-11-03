import { ListaUserProduto } from '../listauserproduto/ListaUserProduto';
import { ModalPostProduto } from '../modalpostproduto/ModalPostProduto';
import CachedIcon from '@mui/icons-material/Cached';
import './Vender.css'

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
                <ListaUserProduto />
            </div>
        </div>
    );
}
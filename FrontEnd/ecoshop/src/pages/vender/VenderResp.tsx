import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ListaUserProdutoResp } from '../../components/produtos/listauserproduto/ListaUserProdutoResp';
import { ModalPostProdutoResp } from '../../components/produtos/modalpostproduto/ModalPostProdutoResp';
import { ToastError } from '../../components/styles/toast/Toasts';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Vender.css'

export const VenderResp = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate()

    useEffect(() => {
        if (token == "") {
            navigate("/home")
        }
    }, [token])

    return (
        <div className='container-vender'>
            <div className='vender-aside'>
                <h3 className='aside-h3'>
                    SEUS PRODUTOS
                </h3>
                <ModalPostProdutoResp />
            </div>
            <div className='vender-main'>
                <div className='vender-main-modal'>
                    <ModalPostProdutoResp />
                </div>
                <div className='vender-main-lista'>
                    <ListaUserProdutoResp />
                </div>
            </div>
        </div>
    );
}
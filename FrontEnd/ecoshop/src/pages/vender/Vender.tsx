import { ModalPostProduto } from '../../components/produtos/modalpostproduto/ModalPostProduto';
import './Vender.css'
import { ListaUserProduto } from '../../components/produtos/listauserproduto/ListaUserProduto';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReduce';

export const Vender = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate()

    useEffect(() => {
        if (token === "") {
            navigate("/home")
        }
    }, [token])

    return (
        <div className='container-vender'>
            <div className='vender-aside'>
                <h3 className='aside-h'>
                    Meus Produtos
                </h3>
                <p className='vender-p2'>
                    É simples e fácil. Clique no botão abaixo preencha as informações de seu produto sustentável, selecione a categoria e confirme!
                </p>
                <div>
                    <ModalPostProduto idProduto={0} textModal={'Cadastrar'}/>
                </div>
            </div>
            <div className='vender-main'>
                <div className='vender-main-modal'>
                    <ModalPostProduto  idProduto={0} textModal={'Cadastrar'}/>
                </div>
                <div className='vender-main-lista'>
                    <ListaUserProduto />
                </div>
            </div>
        </div>
    );
}
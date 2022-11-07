import { ListaProduto } from '../../components/produtos/listaproduto/ListaProduto';
import { Borda } from '../../components/styles/border/Borda';
import { SearchBar } from '../../components/styles/SearchBar';
import './Comprar.css'

export const Comprar = () => {
    return (
        <div className='container-comprar'>
            <div className='comprar-aside'>
                <div className='aside-titulo'>
                    <h3 className='aside-h3'>
                        ADICIONE AO CARRINHO
                    </h3>
                </div>
                <Borda />
                <SearchBar />
                <div className='aside-filtros'>
                    <h3 className='aside-h3'>
                        Filtrar por categoria:
                    </h3>
                    <div className='aside-filtros-categorias'>
                        <span>
                            Biodegradável
                        </span>
                        <span>
                            Materiais Ecológicos
                        </span>
                        <span>
                            Higiene Ecológica
                        </span>
                        <span>
                            Metal
                        </span>
                        <span>
                            Bambu
                        </span>
                    </div>
                </div>
            </div>
            <div className='comprar-main'>
                <ListaProduto />
            </div>
        </div>
    );
}
import { Button } from '@mui/material';
import './ListaProduto.css'

export const ListaProduto = () => {
    return (
        <>
            <div className='card'>
                <div className='card-img'>
                    <img src="./img/FundoHome1.png" alt="" />
                </div>
                <div className='card-body'>
                    <div className='card-body-info'>
                        <span className='card-nome-produto'>
                            Nome Produto
                        </span>
                        <span className='card-categoria'>
                            Categoria: Ecológico
                        </span>
                        <p className='card-p'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima possimus culpa atque fugit unde architecto! Dolores reprehenderit dignissimos amet nobis asperiores, debitis similique minus minima nisi rerum, deleniti neque veniam!
                            <br/><br/>
                            Vendedor: Deivide Joaquim
                        </p>
                    </div>
                    <div className='div-button-valor'>
                        <Button variant='outlined'>Add to card</Button>
                        <span className='card-valor'>$ 25,99</span>
                    </div>
                </div>
            </div>
        </>
    );
}
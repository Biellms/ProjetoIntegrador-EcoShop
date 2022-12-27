import './Cadastro.css';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { FormCadastro } from './FormCadastro';

export const Cadastro = () => {
    return (
        <div className='container-login'>
            <Paper elevation={12} className='cadastro-card'>
                <div className='login-card-logo'>
                    <h3>
                        <span className='ecoshop-header-eco'>ECO</span>
                        <span className='ecoshop-header-shop'>SHOP</span>
                        <img src="./img/logoEcoshop.png" alt="" />
                    </h3>
                </div>
                <div className='login-card-info'>
                    <h3>Create Account</h3>
                    <p>Registre-se para acessar</p>
                </div>
                <FormCadastro />
                <div className='cadastro-voltar'>
                    <Link to='/login'>
                        <b className='text-color-verde-escuro'>Voltar</b>
                    </Link>
                </div>
            </Paper>
        </div>
    );
}
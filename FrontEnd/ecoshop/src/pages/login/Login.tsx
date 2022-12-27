import './Login.css'
import { Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import { FormLogin } from './FormLogin';

export const Login = () => {

    return (
        <div className='container-login'>
            <Paper elevation={12} className='login-card'>
                <div className='login-card-logo'>
                    <h3>
                        <span className='ecoshop-header-eco'>ECO</span>
                        <span className='ecoshop-header-shop'>SHOP</span>
                        <img src="./img/logoEcoshop.png" alt="" />
                    </h3>
                </div>
                <div className='login-card-info'>
                    <h3>Sign In</h3>
                    <p>Logue para acessar</p>
                </div>
                <FormLogin />
                <div>
                    <p>Não tem uma conta?
                        <Link to='/cadastro'>
                            <b className="text-color-verde-escuro"> Cadastre-se</b>
                        </Link>
                    </p>
                </div>
            </Paper>
        </div>
    );
}
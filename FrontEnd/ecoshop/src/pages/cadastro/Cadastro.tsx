import { Button, Paper, TextField, styled } from '@mui/material';
import './Cadastro.css';
import { Link } from 'react-router-dom';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#70A25C',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInputBase-input': {
        color: '#70A25C',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#70A25C',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#70A25C',
        },
    },
});

export const Cadastro = () => {
    return (
        <div className='container'>
            <Paper elevation={12} className='cadastro-card'>
                <div className='login-card-logo'>
                    <h3>
                        <span className='ecoshop-header-eco'>ECO</span>
                        <span className='ecoshop-header-shop'>SHOP</span>
                        <img src="./img/logoEcoshop.png" alt=""/>
                    </h3>
                </div>
                <div className='login-card-info'>
                    <h3>Create Account</h3>
                    <p>Registre-se para acessar</p>
                </div>
                <form action="" className='login-card-form'>
                    <div className='login-card-form-input'>
                        <CssTextField label='Nome' variant='outlined' name='usuario' fullWidth />
                        <CssTextField label='E-mail' variant='outlined' name='email' fullWidth />
                        <CssTextField label='Senha' variant='outlined' name='senha' fullWidth />
                        <CssTextField label='Confirmar Senha' variant='outlined' name='senha' fullWidth />
                    </div>
                    <div className='login-card-form-button'>
                        <Button className="button-login" type='submit' variant="contained" fullWidth>
                            Create Account
                        </Button>
                    </div>
                    <div className='cadastro-voltar'>
                        <Link to='/login'>
                            <b className='text-color-verde-escuro'>Voltar</b>
                        </Link>
                    </div>
                </form>
            </Paper>
        </div>
    );
}
import './Login.css'
import { TextField, Paper, Button, styled  } from '@mui/material'
import { Link } from 'react-router-dom'

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

export const Login = () => {

    return(
        <div className='container'>
            <Paper elevation={12} className='login-card'>
                <div className='login-card-logo'>
                    <h3>
                        <span className='ecoshop-header-eco'>ECO</span>
                        <span className='ecoshop-header-shop'>SHOP</span>
                        <img src="./img/logoEcoshop.png" alt=""/>
                    </h3>
                </div>
                <div className='login-card-info'>
                    <h3>Sign In</h3>
                    <p>Logue para acessar</p>
                </div>
                <form className='login-card-form'>
                    <div className='login-card-form-input'>
                        <CssTextField id='usuario' label='Usuário' variant='outlined' name='usuario' fullWidth
                            // value={userLogin.usuario}  onChange={(e) => updatedModel(e)}
                            />
                        <CssTextField id='senha' label='Senha' variant='outlined' name='senha' type='password' fullWidth
                            // value={userLogin.senha}  onChange={(e) => updatedModel(e)}
                            />
                    </div>
                    <div className='login-card-form-button'>
                        {/* <Link to='/home'> */}
                            <Button className='button-login' type='submit' variant="contained" fullWidth>
                                Sign In
                            </Button>
                        {/* </Link> */}
                    </div>
                </form>
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
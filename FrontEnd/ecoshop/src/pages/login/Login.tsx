import './Login.css'
import { TextField, Paper, Button, styled  } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useState, ChangeEvent, useEffect } from 'react';
import { login } from '../../service/Service';
import UserLogin from '../../model/UserLogin';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';


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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login('/usuarios/logar', userLogin, setToken)
                alert('usuario logado')
              navigate('/home')
        } catch (error) {
                alert('Dados incorretos')
        }
    }


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
                <form  onSubmit={onSubmit} className='login-card-form'>
                    <div className='login-card-form-input'>
                        <CssTextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' fullWidth
                            />
                        <CssTextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' type='password' fullWidth
                            />
                    </div>
                    <div className='login-card-form-button'>
                        {/* <Link to='/home'> */}
                            <Button className='button-login' type='submit' variant="contained" fullWidth>
                                Logar
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
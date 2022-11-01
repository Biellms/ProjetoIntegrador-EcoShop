import './Login.css'
import { TextField, Paper, Button, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { ChangeEvent, useState, useEffect } from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';

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

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: ''
    })

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
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
        if(token != '') {
            navigate('/home');
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário Logado com sucesso!')
        } catch (error) {
            alert('Dados inconsistêntes, por favor tente novamente!' + error)
        }
    }

    return (
        <div className='container'>
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
                <form onSubmit={onSubmit} className='login-card-form'>
                    <div className='login-card-form-input'>
                        <CssTextField id='usuario' label='Usuário' variant='outlined' name='usuario' fullWidth
                            value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <CssTextField id='senha' label='Senha' variant='outlined' name='senha' type='password' fullWidth
                            value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                    </div>
                    <div className='login-card-form-button'>
                        <Button className='button-login' type='submit' variant="contained" fullWidth>
                            Sign In
                        </Button>
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
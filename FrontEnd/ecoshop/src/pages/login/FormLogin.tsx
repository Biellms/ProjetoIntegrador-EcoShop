import './Login.css'
import { FormControl, TextField, IconButton, InputAdornment, InputLabel, OutlinedInput, Button, Backdrop, CircularProgress, } from '@mui/material';
import { ChangeEvent, useState, useEffect, useContext } from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addId, addName, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#97C160',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#97C160',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#97C160',
        },
    },
});

const CssPassWordField = styled(FormControl)({
    '& label.Mui-focused': {
        color: '#97C160',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#97C160',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#97C160',
        },
    },
});

export const FormLogin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

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
        if (respUserLogin.token !== '') {
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id))
            dispatch(addName(respUserLogin.nome))

            closeBackDrop()

            navigate('/home')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (validaCampos()) {
            try {
                await login("/usuarios/logar", userLogin, setRespUserLogin)

                toast.success('Seja bem-vindo! ', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Dados inconsistentes. Favor verificar as informações de login!', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }
        }

        closeBackDrop()
    }

    // VALIDAR CAMPOS OBRIGATORIOS
    const validaCampos = () => {
        let msg = ''

        if (userLogin.usuario === '' && userLogin.senha === '') {
            msg = ' Preencha os campos'
            toast.warn(msg, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        } else {
            if (userLogin.usuario === '') {
                msg = ' O campo "E-mail" é obrigatório'
                toast.warn(msg, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            } if (userLogin.senha === '') {
                msg = ' O campo "Senha" é obrigatório'
                toast.warn(msg, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            }
        }

        if (msg !== '') {
            return false
        }

        return true
    }

    // BACKDROP
    const { openBackDrop, closeBackDrop } = useContext(CartContext)

    // PASSWORDFIELD
    interface State {
        password: string;
        showPassword: boolean;
    }

    const [values, setValues] = useState<State>({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={onSubmit} className='login-card-form'>
                <div className='login-card-form-input'>
                    <CssTextField id='usuario' label='E-mail' variant='outlined' name='usuario' fullWidth
                        value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    />
                    <CssPassWordField >
                        <InputLabel>Senha</InputLabel>
                        <OutlinedInput id="senha" label="senha" name='senha'
                            type={values.showPassword ? 'text' : 'password'} value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </CssPassWordField>
                </div>
                <div className='login-card-form-button'>
                    <Button className='button-login' variant="contained" fullWidth
                        type='submit' onClick={openBackDrop}>
                        Sign In
                    </Button>
                </div>
            </form>
        </>
    );
}
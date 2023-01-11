import './Login.css'
import { FormControl, TextField, IconButton, InputAdornment, InputLabel, OutlinedInput, Button } from '@mui/material';
import { ChangeEvent, useState, useEffect, useContext } from 'react';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addId, addName, addToken } from '../../store/tokens/actions';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ToastError, ToastSuccess, ToastWarn } from '../../components/styles/toast/Toasts';
import axios from 'axios';
import { UtilContext } from '../../context/utilcontext/UtilContext';

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

                ToastSuccess('Seja Bem-vindo!');
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (!error?.response) {
                        ToastError(error.message)
                    } else {
                        ToastError('Dados inconsistentes. Verifique as informações de login!')
                    }
                }
            }
        }

        closeBackDrop()
    }

    // VALIDAR CAMPOS OBRIGATORIOS
    const validaCampos = () => {
        let errorField = false

        if (userLogin.usuario === '' && userLogin.senha === '') {
            errorField = true
            ToastWarn('Preencha os campos')
        } else {
            if (userLogin.usuario === '') {
                errorField = true
                ToastWarn('O campo "E-mail" é obrigatório')
            } if (userLogin.senha === '') {
                errorField = true
                ToastWarn('O campo "Senha" é obrigatório')
            }
        }

        if (errorField) {
            return false
        }

        return true
    }

    // BACKDROP
    const { openBackDrop, closeBackDrop } = useContext(UtilContext)

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
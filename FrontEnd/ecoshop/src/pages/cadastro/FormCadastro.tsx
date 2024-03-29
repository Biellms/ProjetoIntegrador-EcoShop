import './Cadastro.css';
import { Button, TextField, styled, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { cadastroUsuario } from '../../service/Service';
import User from '../../models/User';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

export const FormCadastro = () => {

    const navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>('')

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')

            closeBackDrop()
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (validarCampos()) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)

                ToastSuccess('Usuário cadastrado com sucesso! Logue para acessar!')
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (!error?.response) {
                        ToastError(error.message)
                    } else {
                        ToastError('O e-mail informado é invalido ou já existente!')
                    }
                }
            }
        }

        closeBackDrop()
    }

    // VALIDAR CAMPOS
    const validarCampos = () => {
        let msg = 'Preencha os campos obrigatórios: '
        let blankField = false
        let invalidField = false

        if (user.nome === '') {
            msg += ' "Nome" '
            blankField = true
        } if (user.usuario === '') {
            msg += ' "E-mail" '
            blankField = true
        }

        if (user.senha === '') {
            msg += ' "Senha" '
            blankField = true
        } else if (user.senha.length < 8) {
            invalidField = true
            ToastWarn('A senha deve possuir no minímo 8 caracteres!')
        }

        if (confirmarSenha !== user.senha) {
            invalidField = true
            ToastWarn('Confirme a senha corretamente!')
        }

        if (blankField) {
            ToastWarn(msg)
        }

        if (blankField || invalidField) {
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
                    <CssTextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='nome' label='Nome' variant='outlined' name='nome' fullWidth />
                    <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        id='usuario' label='E-mail' variant='outlined' name='usuario' fullWidth />
                    <CssPassWordField >
                        <InputLabel>Senha</InputLabel>
                        <OutlinedInput id="senha" label="senha" name='senha'
                            type={values.showPassword ? 'text' : 'password'} value={user.senha}
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
                    <CssPassWordField >
                        <InputLabel>Confirmar Senha</InputLabel>
                        <OutlinedInput id="senha" label="Confirmar Senha" name='senha'
                            type={values.showPassword ? 'text' : 'password'} value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                        />
                    </CssPassWordField>
                </div>
                <div className='login-card-form-button'>
                    <Button className="button-login" variant="contained" fullWidth
                        type='submit' onClick={openBackDrop}>
                        Cadastrar
                    </Button>
                </div>
            </form>
        </>
    );
}
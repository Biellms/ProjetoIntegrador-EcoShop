import { Button, Paper, TextField, styled, Backdrop, CircularProgress } from '@mui/material';
import './Cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { cadastroUsuario } from '../../service/Service';
import User from '../../models/User';
import { toast } from 'react-toastify';

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

export const Cadastro = () => {

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

            handleBackDropClose()
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

                toast.success('Usuário cadastrado com sucesso! Logue para acessar!', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            } catch (error) {
                toast.error('O e-mail informado é invalido ou já existente!', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }
        }

        handleBackDropClose()
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
            toast.warn('A senha deve possuir no minímo 8 caracteres', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (confirmarSenha !== user.senha) {
            invalidField = true
            toast.warn('Confirme a senha corretamente!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (blankField) {
            toast.warn(msg, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (blankField || invalidField) {
            return false
        }

        return true
    }

    // BACKDROP
    const [open, setOpen] = useState(false);

    const handleBackDropClose = () => {
        setOpen(false);
    };

    const handleBackDropToggle = () => {
        setOpen(!open);
    };

    return (
        <>
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
                    <form onSubmit={onSubmit} className='login-card-form'>
                        <div className='login-card-form-input'>
                            <CssTextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                                id='nome' label='Nome' variant='outlined' name='nome' fullWidth />
                            <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                                id='usuario' label='E-mail' variant='outlined' name='usuario' fullWidth />
                            <CssTextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                                id='senha' label='Senha' variant='outlined' name='senha' type='password' fullWidth />
                            <CssTextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} 
                                id='confirmarsenha' label='Confirmar Senha' variant='outlined' name='senha' type='password' fullWidth />
                        </div>
                        <div className='login-card-form-button'>
                            <Button className="button-login" variant="contained" fullWidth
                            type='submit' onClick={handleBackDropToggle}>
                                Cadastrar
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>

    );
}
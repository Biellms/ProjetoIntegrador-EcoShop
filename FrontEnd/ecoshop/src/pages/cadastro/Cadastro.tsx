import { Button, Paper, TextField, styled } from '@mui/material';
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
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
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
        if (userResult.id != 0) {
            navigate('/login')
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
        if (confirmarSenha == user.senha) {
            await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            
            toast.success('Usuário cadastrado com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/home')
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
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

    return (
        <div className='container-login'>
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
                <form onSubmit={onSubmit} className='login-card-form'>
                    <div className='login-card-form-input'>
                        <CssTextField  value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' fullWidth />
                        <CssTextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario'  label='E-mail' variant='outlined' name='usuario' fullWidth />
                        <CssTextField  value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' fullWidth />
                        <CssTextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarsenha' label='Confirmar Senha' variant='outlined' name='senha' fullWidth />
                    </div>
                    <div className='login-card-form-button'>
                        <Button className="button-login" type='submit' variant="contained" fullWidth>
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
    );
}
import React from 'react';
import { Button, Paper, TextField } from '@mui/material';
import './Login.css'
import { PasswordField } from './Passwordfield';
import { Link } from 'react-router-dom';

export function Login() {

    return (
        <div className='container'>
            <Paper elevation={12} className='login-card'>
                <div className='login-card-logo'>
                    <h2>EcoShop</h2>
                </div>
                <div className='login-card-info'>
                    <h3>Sign In</h3>
                    <p>Logue para acessar</p>
                </div>
                <form action="" className='login-card-form'>
                    <div className='login-card-form-input'>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' fullWidth/>
                        <PasswordField />
                    </div>
                    <div className='login-card-form-button'>
                        <Link to='/home'>
                            <Button type='submit' variant="contained" className="form-button" fullWidth>
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </form>
                <div>
                    <p>Não tem uma conta?
                        <Link to='/cadastro'>
                            <b> Cadastre-se</b>
                        </Link>
                    </p>
                </div>
            </Paper>
        </div>
    );
}
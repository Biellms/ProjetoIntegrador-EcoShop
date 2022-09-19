import React from 'react';
import { Button, Paper, TextField } from '@mui/material';
import './Cadastro.css'
import { Link } from 'react-router-dom';

export function Cadastro() {
    return (
        <div className='container'>
            <Paper elevation={12} className='cadastro-card'>
                <div className='login-card-logo'>
                    <h2>EcoShop</h2>
                </div>
                <div className='login-card-info'>
                    <h3>Create Account</h3>
                    <p>Registre-se para acessar</p>
                </div>
                <form action="" className='login-card-form'>
                    <div className='login-card-form-input'>
                        <TextField label='Nome' variant='outlined' name='usuario' fullWidth/>
                        <TextField label='E-mail' variant='outlined' name='usuario' fullWidth/>
                        <TextField label='Senha' variant='outlined' name='usuario' fullWidth/>
                        <TextField label='Confirmar Senha' variant='outlined' name='usuario' fullWidth/>
                    </div>
                    <div className='login-card-form-button'>
                        <Button type='submit' variant="contained" className="form-button" fullWidth>
                            Create Account
                        </Button>
                    </div>
                    <div className='cadastro-voltar'>
                        <Link to='/login'>
                            <b>Voltar</b>
                        </Link>
                    </div>
                </form>
            </Paper>
        </div>
    );
}
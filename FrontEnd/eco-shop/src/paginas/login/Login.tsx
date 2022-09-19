import React from 'react';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material';
import './Login.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { PasswordField } from './Passwordfield';

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
                        <TextField label='Usuário' variant='outlined' name='usuario' fullWidth/>
                        <PasswordField />
                    </div>
                    <div className='login-card-form-button'>
                        <Button type='submit' variant="contained" className="form-button" fullWidth>
                            Sign In
                        </Button>
                    </div>
                </form>
                <div>
                    <p>Não tem uma conta? <b>Cadastre-se</b></p>
                </div>
            </Paper>
        </div>
    );
}
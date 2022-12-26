import React, { ChangeEvent, useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from '@mui/material';
import './Login.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import UserLogin from '../../models/UserLogin';

const CssTextField = styled(FormControl)({
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

export const PasswordField = () => {

    interface State {
        password: string;
        showPassword: boolean;
      }

    const [values, setValues] = useState<State> ({
        password: '',
        showPassword: false,
      });

      const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: ''
    })
    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        handleChange('password')

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    return (
        <CssTextField >
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
                id="senha"
                label="senha"
                name='senha'
                type={values.showPassword ? 'text' : 'password'}
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </CssTextField>
    );
}
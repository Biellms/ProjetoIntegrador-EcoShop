import React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from '@mui/material';
import './Login.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function PasswordField() {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" fullWidth >
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
                id="senha"
                label="senha"
                name='senha'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
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
        </FormControl>
    );
}
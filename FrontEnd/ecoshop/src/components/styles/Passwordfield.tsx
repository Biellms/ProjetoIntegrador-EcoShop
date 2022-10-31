import React from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, } from '@mui/material';
import './Login.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function PasswordField() {

    interface State {
        password: string;
        showPassword: boolean;
      }

    const [values, setValues] = React.useState<State> ({
        password: '',
        showPassword: false,
      });

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
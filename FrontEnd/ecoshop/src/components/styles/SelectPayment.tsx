import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export const SelectPayment = () => {

    const [pagamento, setpagamento] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setpagamento(event.target.value as string);
    };

    return (
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Forma de Pagamento</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={pagamento}
                onChange={handleChange}
                label="pagamento"
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={1}>Cartão de Crédito</MenuItem>
                <MenuItem value={2}>Cartão de Débito</MenuItem>
                <MenuItem value={3}>Boleto</MenuItem>
            </Select>
        </FormControl>
    );
}
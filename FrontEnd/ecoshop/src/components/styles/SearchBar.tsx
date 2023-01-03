import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const CssSearchField = styled(FormControl)({
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

export const SearchBar = () => {

    const [search, setSearch] = useState('')

    const { respValue } = useContext(CartContext)

    const navigate = useNavigate()

    function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        navigate(`/comprar/${search}`)
        respValue(1)
        setSearch('')
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setSearch(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <CssSearchField fullWidth>
                    <InputLabel>Search...</InputLabel>
                    <OutlinedInput id="search" label="Search..." name='search'
                        value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton size="medium" type='submit' >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </CssSearchField>
            </form>
        </>

    );
}
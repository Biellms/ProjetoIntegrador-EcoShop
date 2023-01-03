import { TextField } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

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
        <form onSubmit={onSubmit}>
            <TextField id='search' label='Search...' variant='outlined' name='search' fullWidth
                value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
            />
        </form>
    );
}
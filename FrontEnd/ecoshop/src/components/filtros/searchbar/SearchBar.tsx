import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { UtilContext } from '../../../context/utilcontext/UtilContext';

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
        padding: '0',
    },
});

export const SearchBar = () => {

    const [search, setSearch] = useState('')
    const { respApiValue } = useContext(UtilContext)
    const navigate = useNavigate()

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (search !== '') {
            navigate(`/comprar/${search}/filtro/&`)
        } else {
            navigate(`/comprar`)
        }

        respApiValue(1)
        setSearch('')
    }

    const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <CssSearchField size='small' fullWidth>
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

export const SearchPrecoMin = () => {

    const [search, setSearch] = useState('')
    const { respApiValue } = useContext(UtilContext)
    const navigate = useNavigate()

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (search !== '') {
            navigate(`/comprar/${search}/filtro/&`)
        } else {
            navigate(`/comprar/?/filtro/&`)
        }

        respApiValue(3)
        setSearch('')
    }

    const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <CssSearchField size='small'>
                    <InputLabel>Min</InputLabel>
                    <OutlinedInput id="search" label="Min" name='search'
                        value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton size="small" type='submit' >
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

export const SearchPrecoMax = () => {

    const [search, setSearch] = useState('')
    const { respApiValue } = useContext(UtilContext)
    const navigate = useNavigate()

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (search !== '') {
            navigate(`/comprar/${search}/filtro/&`)
        } else {
            navigate(`/comprar/?/filtro/&`)
        }

        respApiValue(4)
        setSearch('')
    }

    const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <CssSearchField size='small'>
                    <InputLabel>Max</InputLabel>
                    <OutlinedInput id="search" label="Max" name='search'
                        value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton size="small" type='submit' >
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
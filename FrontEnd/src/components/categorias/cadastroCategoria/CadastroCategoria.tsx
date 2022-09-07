import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, CardContent, Card, Box, styled } from "@material-ui/core"
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../service/Service';
import './CadastroCategoria.css';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#70A25C',
    },
    '& .MuiFormLabel-root': {
        color: '#70A25C',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInputBase-input': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'green',
        },
        '&:hover fieldset': {
            borderColor: '#70A25C',
            boxShadow: '2px 2px 2px #70A25C',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
            boxShadow: '2px 2px black',
        },
    },
});

function CadastroCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricao: '',
        Boolean: true

    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria" + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrado com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
        back()

    }
    function back() {
        history.push('/categorias')
    }

    return (
        <Box display='flex' justifyContent='center'>
            <Box width={'37%'} margin={25} className='box-atualizar-categoria'>
                <Card variant="outlined" className='card-atualizar'>
                    <CardContent>
                        <Container maxWidth="sm" className="topo">
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" className='text' component="h1" align="center" >Formulario de cadastro de categoria</Typography>
                                <CssTextField value={categoria.nomeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nomeCategoria" label="Nome da Categoria" variant="outlined" name="nomeCategoria" margin="normal" fullWidth />
                                <CssTextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                                <Button type="submit" variant="contained" color="primary" className='btnFinalizar' fullWidth>
                                    Finalizar
                                </Button>
                            </form>
                        </Container>
                    </CardContent>
                </Card>
            </Box>
        </Box >
    )
}

export default CadastroCategoria;
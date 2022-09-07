import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarCategoria.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, deleteId } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarCategoria() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>()

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

    function sim() {
        history.push('/categorias')
        deleteId(`/categorias/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Categoria deletado com sucesso!', {
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

    function nao() {
        history.push('/categorias')
    }

    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Box margin={'18%'}>
                    <Card variant="outlined" className='card-deletar'>
                        <CardContent>
                            <Box justifyContent="center">
                                <Typography color="textSecondary" gutterBottom>
                                    Deseja deletar a categoria:
                                </Typography>
                                <Typography color="textSecondary">
                                    {categoria?.nomeCategoria}
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                                <Box mx={2}>
                                    <Button onClick={sim} variant="contained" className="botao-sim" size='large' color="primary">
                                        Sim
                                    </Button>
                                </Box>
                                <Box mx={2}>
                                    <Button onClick={nao} variant="contained" className='botao-nao' size='large' color="secondary">
                                        Não
                                    </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}

export default DeletarCategoria;
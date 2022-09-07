import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarProduto() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [post, setPosts] = useState<Produto>()

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
        buscaId(`/produtos/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/produtos')
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Produto deletada com sucesso!', {
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
        history.push('/produtos')
    }

    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Box margin={'18%'}>
                    <Card variant="outlined" className='card-deletar'>
                        <CardContent>
                            <Box justifyContent="center">
                                <Typography color="textSecondary" gutterBottom>
                                    Deseja deletar o produto ?
                                </Typography>
                                <Typography color="textSecondary" >
                                    {post?.nomeProduto}
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
                                <Box>
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
export default DeletarProduto;
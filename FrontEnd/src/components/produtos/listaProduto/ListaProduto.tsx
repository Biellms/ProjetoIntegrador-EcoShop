import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { Box, Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom'
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();

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

  async function getProduto() {
    await busca("/produtos", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produto.length])

  return (
    <>
      <Grid className='container-produto'>
        {
          produto.map(post => (
            <Box className='container2'>
              <Card className="tamanho">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.imagem}
                    alt="Escova"
                  />
                  <CardContent>
                    <Box className='box-descricao-produto' borderBottom={2}>
                    <Typography variant="body2" component="p" className='titulo-card-produto'>
                      {post.nomeProduto}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {post.descricao}
                    </Typography>
                    <Typography variant="body2" component="p" className='texto-preco-produto'>
                      R${post.preco}
                    </Typography>
                    </Box>
                    <Typography variant="body2" component="p" className='texto-categoria-produto'>
                      Categoria: {post.categoria?.nomeCategoria}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardContent className='caixa-botoes'>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/formularioProduto/${post.id}`} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="botao-atualizar" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarProduto/${post.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="botao-deletar" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardContent>

              </Card>
            </Box >
          ))
        }
      </Grid>
    </>
  )
}

export default ListaProduto;
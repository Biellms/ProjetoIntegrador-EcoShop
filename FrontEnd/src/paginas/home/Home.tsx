import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import Equipe from '../equipe/Equipe';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Usuário precisa estar logado!', {
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

    return (
        <>
            <Grid container direction="row" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Somos a TrECO!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center">
                            Bem vindos ao Ecommerce mais sustentável e descolado que você já viu!
                            Onde, além de comprar, você também poderá vender seus produtos ecológios!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to='/sobre' className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Saiba Mais</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa2'>
                <Grid item xs={6} >
                    <Box display="flex" justifyContent='center'>
                        <Box>
                            <img src="https://i.imgur.com/xJwojLF.png" alt="" width="700vw" height="700vh" className='imagem2' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box paddingX={12} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>
                            Compre e venda produtos que não agridem o meio ambiente, e tenha uma nova renda, além de contribuir com o planeta.
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center">
                            A TrECO (Trabalho Reponsável Ecológico) é uma plataforma de
                            e-commerce com o objetivo de vender produtos entre a
                            comunidade, criados pelos próprios moradores, se tornando um
                            ecossistema, e apoianda nas relações econômicas, sociais e
                            ambientais nas comunidades de forma extremamente positiva.
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent='center' marginTop={3}>
                        <Box mx={2}>
                            <ModalProduto />
                        </Box>
                        <Box mx={2}>
                            <Link to='/produtos' className='text-decorator-none'>
                                <Button variant="outlined" className="botao">
                                    Ver Produtos
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" alignItems="center" className='caixa3'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Venha nos conhecer!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center">
                            Utilizamos do E-Commerce, para incentivar as pessoas da comunidade utilizarem os próprios serviços dentro da mesma, em prol do giro econômico, como vendas de produtos artesanais, coleta seletiva, e até venda de serviços em um futuro. Para tornar os assentamentos humanos inclusivos, seguros, resiliêntes e sustentáveis.
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent='center' marginTop={3}>
                        <Box mx={1}>
                            <a href='https://instagram.com/trecopi?utm_medium=copy_link' target='_blank' className='text-decorator-none'>
                                <InstagramIcon className='insta'/>
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href='https://br.pinterest.com/alojatreco/' target='_blank' className='text-decorator-none'>
                                <PinterestIcon className='pint'/>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Equipe />
        </>
    );
}

export default Home;
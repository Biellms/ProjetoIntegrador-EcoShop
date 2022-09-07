import React from 'react';
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let footerComponet;

    if (token != '') {
        footerComponet = <footer>
            <Box className="footer-container">
                <Container maxWidth='lg'>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-footer" borderBottom={1}>
                                Contato
                            </Box>
                            <Box marginTop={1}>
                                <Box className="texto-footer">
                                    <a href="mailto:biell.mendes8@gmail.com" color="inherit" target="_blank" rel="noreferrer">
                                        E-mail
                                    </a>
                                </Box>
                                <Box className="texto-footer">
                                    <a href="https://br.pinterest.com/alojatreco/" color="inherit" target="_blank" rel="noreferrer">
                                        Pinterest
                                    </a>
                                </Box>
                                <Box className="texto-footer">
                                    <a href="https://instagram.com/trecopi?utm_medium=copy_link" color="inherit" target="_blank" rel="noreferrer">
                                        Instagram
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-footer" borderBottom={1}>
                                Suporte
                            </Box>
                            <Box marginTop={1}>
                                <Box className="texto-footer">
                                    <Link to='/sobre' className='text-decorator-none'>
                                        Sobre
                                    </Link>
                                </Box>
                                <Box className="texto-footer">
                                    <Link to='/equipe' className='text-decorator-none'>
                                        Equipe
                                    </Link>
                                </Box>
                                <Box className="texto-footer">
                                    <Link to='/equipe' className='text-decorator-none'>
                                        Fale Conosco
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-footer" borderBottom={1}>
                                Informações
                            </Box>
                            <Box marginTop={1}>
                                <Box className="texto-footer">
                                    <Link to='/home' className='text-decorator-none'>
                                        Home
                                    </Link>
                                </Box>
                                <Box className="texto-footer">
                                    <Link to='/produtos' className='text-decorator-none'>
                                        Produtos
                                    </Link>
                                </Box>
                                <Box className="texto-footer">
                                    <Link to='/categorias' className='text-decorator-none'>
                                        Categorias
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box textAlign="center" className="titulo2-footer">
                                TrECO © 2021 Todos os Direitos Reservados.
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer >
    }

    return (
        <>
            {footerComponet}
        </>
    )
}

export default Footer;

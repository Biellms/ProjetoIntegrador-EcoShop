import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import './Equipe.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Equipe() {
    return (
        <>
            <Grid className='container-titulo-equipe'>
                <Typography variant="h4" color="initial" className='titulo-equipe'>Nossa Equipe</Typography>
            </Grid>
            <Grid className='container-equipe'>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/qS1Mn8z.jpg"
                        alt="deivide"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Deivide Joaquim
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Prazer, tenho 27 anos e sou de Guarulhos/SP. Eu amo tecnologia e meu hooby preferido é estar com a minha familia.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Dejsilva" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/deivide-silva-748175213/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/S0EGvAp.jpg"
                        alt="jeffrey"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Jeffrey Rodrigues
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Prazer, tenho 29 anos. Sou entusiasta da tecnologia, amo viajar, superar desafios e jogar videogame nas horas vagas.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/JeffreyRodriigues" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/jeffreyrodrigues/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/YNWcMQq.jpg"
                        alt="gabriel"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Gabriel Mendes
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Eaee, tenho 19 anos sou de São Paulo/SP. Sou uma pessoa muito persistente e apaixonado por Tecnologia da Informação.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Biellms" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/yLO6JBC.jpg"
                        alt="lucas"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Lucas Bernardino
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                             Olá prazer, tenho 19 anos e moro em São Paulo/SP. E sou apaixonado pelo universo.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/LucasIluminado" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/lucasdevsousa/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>

                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://i.imgur.com/Uubnybs.png"
                        alt="milton"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Milton Viegas
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Africano bacana de 30 anos. Autodidata, extremamente curioso e viajante.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/Milton-Viegas" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/milton-viegas-849655b0/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
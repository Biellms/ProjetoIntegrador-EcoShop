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
                        image="https://avatars.githubusercontent.com/u/89025317?v=4"
                        alt="nome"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Samuel Pereira Brandão
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                        Sempre codifique como se o cara que acabasse mantendo o seu código fosse um psicopata violento que sabe onde você mora.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/SamuelPereiraBrandao" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/samuelpereirabrandao/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                        <br /> <br />
                    </CardActions>
                </Card>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image="https://avatars.githubusercontent.com/u/85175391?v=4"
                        alt="nome"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                        Guilherme Rodrigues dos Santos
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                        Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="https://github.com/GuilhermeRodriguesSantos" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="https://www.linkedin.com/in/guilhermedev/" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image=""
                        alt="nome"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Nome aqui
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Texto aqui
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image=""
                        alt="nome"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Nome aqui
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Texto aqui
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
                <Card className='cartao'>
                    <CardMedia
                        component="img"
                        height="200px"
                        image=""
                        alt="nome"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="nome">
                            Nome aqui
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="texto-card">
                            Texto aqui
                        </Typography>
                    </CardContent>

                    <CardActions className="botao-card" >
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <GitHubIcon className='git' />
                            </a>
                        </Box>
                        <Box mx={1}>
                            <a href="#" target="_blank" className='text-decorator-none'>
                                <LinkedInIcon className='linkedin' />
                            </a>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
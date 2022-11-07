import { makeStyles } from '@material-ui/core';
import { CardActionArea, CardMedia, Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import './Sobre.css';


const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 300
    },
});

export const Sobre = () => {
    const classes = useStyles();

    return (
        <>
            <section className='fundo-sessao'>
                {/* <hr /> */}

                <div className="objetivos">
                    <h1>EM DESENVOLVIMENTO 🖥️</h1>
                </div>


                {/* <div className="lista-objetivos">
                    <ul>
                        <li>
                            Estimular o reuso de materia prima descartada. Incentivar por materiais
                            biodegradáveis.
                        </li>
                        <li>
                            Equalizar a diferença de valor de produtos sustentáveis.
                        </li>
                        <li>
                            como uma maneira de reagir ao descarte de materiais que se acumulam na atmosfera. A
                            ideia do e-commerce, é incentivar empresas a criar soluções e o meio para apresentar aos usuários;
                            classificamos os produtos
                        </li>
                    </ul>
                </div>

                <div className="subtitulo">
                    <h2>Nossos valores:</h2>
                </div>

                <div className="cards">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className="img-missao"
                                component="img"
                                height="200"
                            />
                            <CardContent>
                                <Typography className='texto-card-centro' gutterBottom variant="h5" component="h2">
                                    Missão
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Incentivar consumidores e parceiros ao consumo e produção conscientes.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className="img-valor"
                                component="img"
                                height="200"
                            />
                            <CardContent>
                                <Typography className='texto-card-centro' gutterBottom variant="h5" component="h2">
                                    Valores
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sustentabilidade, transparência, qualidade, eficiência, ética e diversidade.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className="img-visao"
                                component="img"
                                height="200"
                              
                            />
                            <CardContent>
                                <Typography className='texto-card-centro' gutterBottom variant="h5" component="h2">
                                    Visão
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Mudar o mundo através da conscientização e a importância sobre o consumo.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className="img-protecao"
                                component="img"
                                height="200"
                            />
                            <CardContent>
                                <Typography className='texto-card-centro' gutterBottom variant="h5" component="h2">
                                    Impacto Ambiental
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Visamos reduzir substancialmente a geração de resíduos incentivando a prevenção, redução, reciclagem e reuso.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div> */}

            </section>
        </>
    );
}
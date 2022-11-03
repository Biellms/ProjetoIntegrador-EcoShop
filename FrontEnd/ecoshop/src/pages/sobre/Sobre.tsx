import { makeStyles } from '@material-ui/core';
import { CardActionArea, CardMedia, Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import './Sobre.css';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const Sobre = () => {
    const classes = useStyles();

    return (
        <>
            <section className="section-home">
                <div className="section-home-ecoshop">
                    <div className="ecoshop-logo">
                        <h1 className="ecoshop-h1">
                            <span className="ecoshop-h1-eco"> ECO</span>
                            <span className="ecoshop-h1-shop">SHOP</span></h1>
                        <img src="./img/logoEcoshop.png" alt="" className="ecoshop-img" />
                    </div>
                    <span className="ecoshop-span">
                        E-Commerce de Produtos Sustentáveis
                    </span>
                </div>
            </section>

            <section className='fundo-sessao'>
                <hr />

                <div className="objetivos">
                    <h1>Um pouco sobre os objetivos da ecoshop</h1>
                </div>


                <div className="lista-objetivos">
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
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/img/alvo.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Missão
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Incentivar consumidores e parceiros ao consumo e produção conscientes.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Valores
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Sustentabilidade, transparência, qualidade, eficiência, ética e diversidade.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Visão
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Mudar o mundo através da conscientização e a importância sobre o consumo.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Impacto Ambiental
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Visamos reduzir substancialmente a geração de resíduos incentivando a prevenção, redução, reciclagem e reuso.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
        </div>
               
            </section>
        </>
    );
}
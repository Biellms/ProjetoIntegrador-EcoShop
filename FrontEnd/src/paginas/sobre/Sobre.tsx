import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Sobre.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Sobre() {
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
            <Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid alignItems="center" item xs={12} className='center'>
                        <img src="https://i.imgur.com/Hch416C.png" alt="treco logo" className='imgtreco' />
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='quemSomos'>SOBRE</Typography>
                    </Grid>
                    <Grid alignItems="center" item xs={12} className='center'>
                        <p className='text-sobre'>
                            A Treco (Trabalho Responsável Ecológico) é uma plataforma de E-commerce desenvolvida utilizando como base a ODS 11 <b>Cidades e Comunidades Sustentáveis</b> com o objetivo de vender produtos entre a comunidade, criados pelos próprios moradores, se tornando um ecossistema, e apoiando nas relações econômicas, sociais e ambientais nas comunidades de forma extremamente positiva.
                            O principal objetivo da Treco é possibilitar a compra e venda de produtos que não agridem o meio ambiente, e com isso possa gerar novas rendas dentro de determinadas comunidades, permitindo assim a contribuição com o Planeta.
                            Temos também como objetivo, influenciar a reciclagem, permitindo ambientes urbanos mais limpos e seguros para os próprios moradores, e num futuro podermos criar parcerias com empresas de reciclagem, para que a comunidade possa fazer a troca por pontos dentro do nosso ecommerce, e com isso todos possam fazer compras de nossos produtos com os "TrecoPoints".
                        </p>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" className='ods11' >ODS 11 - CIDADES E COMUNIDADES SUSTENTÁVEIS</Typography>
                        <Box className='boxText'>
                            <p className='text2'>11.1 até 2030, garantir o acesso de todos a habitação segura, adequada e a preço acessível, e aos serviços básicos e urbanizar as favelas</p>
                            <p className='text2'>11.2 até 2030, proporcionar o acesso a sistemas de transporte seguros, acessíveis, sustentáveis e a preço acessível para todos, melhorando a segurança rodoviária por meio da expansão dos transportes públicos, com especial atenção para as necessidades das pessoas em situação de vulnerabilidade, mulheres, crianças, pessoas com deficiência e idosos</p>
                            <p className='text2'>11.3 até 2030, aumentar a urbanização inclusiva e sustentável, e as capacidades para o planejamento e gestão de assentamentos humanos participativos, integrados e sustentáveis, em todos os países</p>
                            <p className='text2'>11.4 fortalecer esforços para proteger e salvaguardar o patrimônio cultural e natural do mundo</p>
                            <p className='text2'>11.5 até 2030, reduzir significativamente o número de mortes e o número de pessoas afetadas por catástrofes e substancialmente diminuir as perdas econômicas diretas causadas por elas em relação ao PIB global, incluindo os desastres relacionados à água, com o foco em proteger os pobres e as pessoas em situação de vulnerabilidade</p>
                            <p className='text2'>11.6 até 2030, reduzir o impacto ambiental negativo per capita das cidades, inclusive prestando especial atenção à qualidade do ar, gestão de resíduos municipais e outros</p>
                            <p className='text2'>11.7 até 2030, proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, aos espaços públicos verdes, particularmente para as mulheres e crianças, pessoas idosas e pessoas com deficiência</p>
                            <p className='text2'>11.a apoiar relações econômicas, sociais e ambientais positivas entre áreas urbanas, peri-urbanas e rurais, reforçando o planejamento nacional e regional de desenvolvimento</p>
                            <p className='text2'>11.b até 2020, aumentar substancialmente o número de cidades e assentamentos humanos adotando e implementando políticas e planos integrados para a inclusão, a eficiência dos recursos, mitigação e adaptação às alterações climáticas, a resiliência a desastres; e desenvolver e implementar, de acordo com o “Sendai Framework” para a redução do risco de desastres 2015-2030, o gerenciamento holístico do risco de desastres em todos os níveis</p>
                            <p className='text2'>11.c apoiar os países menos desenvolvidos, inclusive por meio de assistência técnica e financeira, para construções sustentáveis e resilientes, utilizando materiais locais</p>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;
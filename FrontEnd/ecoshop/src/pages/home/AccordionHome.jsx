import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionHome.css';

export const AccordionHome = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <span className='home-span'>
                        Proteção do meio ambiente
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='home-p-accordion'>
                        O primeiro fator que demonstra a relevância da sustentabilidade no e-commerce é a contribuição com a preservação do meio ambiente.
                        Trata-se de um modelo de negócio responsável e que auxilia a evitar desastres ambientais e impactos nos ambientes naturais.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <span className='home-span'>
                        Tripé da Sustentabilidade
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                <p className='home-p-accordion'>
                        O chamado tripé da sustentabilidade é baseado em três princípios: o social, o ambiental e o econômico.
                        Esses três fatores precisam ser integrados para que a sustentabilidade de fato aconteça. Sem eles, a sustentabilidade não se sustenta.
                        <br /><br />
                        <b>• Social:</b> Engloba as pessoas e suas condições de vida, como educação, saúde, violência, lazer, dentre outros aspectos.<br />
                        <b>• Ambiental:</b> Refere-se aos recursos naturais do planeta e a forma como são utilizados pela sociedade, comunidades ou empresas.<br />
                        <b>• Econômico:</b> Relacionado com a produção, distribuição e consumo de bens e serviços. A economia deve considerar a questão social e ambiental.<br />
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <span className='home-span'>
                        Uso de materiais recicláveis
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                <p className='home-p-accordion'>
                        Os materiais recicláveis são essenciais para reduzir a quantidade de resíduos destinados de forma irregular e ainda gerar renda à sociedade.
                        Portanto, é preciso repensar os processos e otimizar o uso desses materiais, sempre garantindo que sejam enviados para a reciclagem, e não para aterros sanitários.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <span className='home-span'>
                        Processos produtivos mais sustentáveis
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                <p className='home-p-accordion'>
                        Os processos produtivos são os principais alvos para implementar ações sustentáveis, evitando excessos, desperdícios e consumo desordenado dos recursos naturais.
                        Portanto, se o e-commerce conta com a produção, é um setor que deve ser revisado, principalmente considerando os seguintes aspectos:
                        <br /><br />
                        • Uso de matéria-prima sustentável;<br />
                        • Consumo consciente de energia;<br />
                        • Economia ou reutilização da água;<br />
                        • Destinação adequada dos resíduos;<br />
                        • Estratégias de educação ambiental.
                    </p>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
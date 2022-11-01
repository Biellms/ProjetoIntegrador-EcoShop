import React from 'react';
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TokenState } from '../../store/tokens/tokensReduce';
import { useSelector } from 'react-redux';

export const Footer = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let footerComponent;

    if (token != '') {
        footerComponent = <footer>
        <div className='footer-ecoshop'>
            <a href="https://github.com/Biellms/ProjetoIntegrador-EcoShop" target='_blank'>
                <h3>
                    <span className='ecoshop-header-eco'>ECO</span>
                    <span className='ecoshop-header-shop'>SHOP</span>
                    <img src="./img/logoEcoshop.png" alt=""/>
                </h3>
            </a>
            <p className="footer-p"> 
                E-Commerce de Produtos Sustentáveis
            </p>
            <div className='footer-icons'>
                <GitHubIcon className='icons' />
                <LinkedInIcon className='icons' />
                <InstagramIcon className='icons' />
            </div>
        </div>
        <div className='footer-ecoshop2'>
            <h3 >
                Mais Informações
            </h3>
            <p className="footer-p"> 
                Sobre
            </p>
            <p className="footer-p"> 
                Equipe
            </p>
            <p className="footer-p"> 
                Contato
            </p>
        </div>
    </footer>
    }

    return (
        <>
            {footerComponent}
        </>
    );
}
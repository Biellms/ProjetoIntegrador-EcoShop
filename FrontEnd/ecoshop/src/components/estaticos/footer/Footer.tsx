import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export const Footer = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let footerComponent;

    if (token !== '') {
        footerComponent = <footer>
            <div className='footer-container'>
                <div className='footer-ecoshop'>
                    <a href="https://github.com/Biellms/ProjetoIntegrador-EcoShop" target='_blank'>
                        <h3>
                            <span className='ecoshop-header-eco'>ECO</span>
                            <span className='ecoshop-header-shop'>SHOP</span>
                            <img src="./img/logoEcoshop.png" alt="" />
                        </h3>
                    </a>
                    <p className="footer-p">
                        E-Commerce de Produtos Sustentáveis
                    </p>
                    <div className='footer-icons'>
                        <IconButton size="medium" href='https://github.com/Biellms' target='_blank'>
                            <GitHubIcon fontSize='large' />
                        </IconButton>
                        <IconButton size="medium" href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" >
                            <LinkedInIcon fontSize='large' />
                        </IconButton>
                        <IconButton size="medium" href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" >
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton size="medium" href="mailto:biell.mendes8@gmail.com" target="_blank" >
                            <EmailIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
                <div className='footer-ecoshop2'>
                    <div className='footer-ecoshop2-info'>
                        <h3 >
                            Mais Informações
                        </h3>
                        <Link to='/sobre'>
                            <p className="footer-p">
                                Sobre
                            </p>
                        </Link>
                        <a href="https://github.com/Biellms" target="_blank" rel="noopener noreferrer">
                            <p className="footer-p">
                                Equipe
                            </p>
                        </a>
                        <a href="mailto:biell.mendes8@gmail.com">
                            <p className="footer-p">
                                Contato
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-ecoshop3'>
                <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" rel="noopener noreferrer">
                    <p className="footer-p">
                        © 2021-2023 Gabriel Mendes
                    </p>
                </a>
            </div>
        </footer>
    }

    return (
        <>
            {footerComponent}
        </>
    );
}
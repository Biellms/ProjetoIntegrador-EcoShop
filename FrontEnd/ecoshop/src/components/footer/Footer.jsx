import React from 'react';
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <a href="https://github.com/Biellms/ProjetoIntegrador-EcoShop" target='_blank'>
                    <h2>
                        <span className='ecoshop-header-eco'>Eco</span>
                        <span className='ecoshop-header-shop'>Shop</span>    
                    </h2>
                </a>
            </div>
            <div className='footer-icons'>
                <GitHubIcon className='icons' />
                <LinkedInIcon className='icons' />
                <InstagramIcon className='icons' />
            </div>
        </footer>
    );
}
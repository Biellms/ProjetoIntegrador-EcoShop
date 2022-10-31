import { AccountCircle } from '@mui/icons-material';
import { Badge, Divider, IconButton, Menu, MenuItem, Tooltip, Zoom } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import './Navbar.css';
import './Media.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuNav = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
  };

    const handleCloseNav = () => {
        setAnchorElNav(null);
    };

    const handleMenuUser = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <div className='header-menu' >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuNav}
                    color="default"
                >
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNav}
                >
                    <MenuItem onClick={handleCloseNav}>Home</MenuItem>
                    <MenuItem onClick={handleCloseNav}>Comprar</MenuItem>
                    <MenuItem onClick={handleCloseNav}>Carrinho</MenuItem>
                    <MenuItem onClick={handleCloseNav}>Sobre</MenuItem>
                </Menu>
            </div>
            <div className='header-logo'>
                <Link to='/home'>
                    <h2>
                    <span className='ecoshop-header-eco'>Eco</span>
                    <span className='ecoshop-header-shop'>Shop</span>    
                    </h2>
                </Link>
            </div>
            <div className='header-nav'>
                <Link to='/home'>
                    <h4 >HOME</h4>
                </Link>
                <h4 >COMPRAR</h4>
                <h4 >SOBRE</h4>
            </div>
            <div className='header-user'>
                <Tooltip title='Carrinho' TransitionComponent={Zoom}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="default"
                    >
                        <Badge badgeContent={3} color='success'>
                            <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuUser}
                    color="default"
                >
                    <AccountCircle fontSize='large' />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    keepMounted
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseUser}
                >
                    <MenuItem onClick={handleCloseUser} className='menu-item-text'>Olá, Usuário</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseUser} className='menu-item-text'>Seus Produtos</MenuItem>
                    <MenuItem onClick={handleCloseUser} className='menu-item-text'>Cadastrar Produtos</MenuItem>
                    <Link to='/login'>
                        <MenuItem onClick={handleCloseUser} className='menu-item-text'>Sair</MenuItem>
                    </Link>
                </Menu>
            </div>
        </header>
    );
}
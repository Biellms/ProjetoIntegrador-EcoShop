import { AccountCircle } from '@mui/icons-material';
import { Badge, Divider, IconButton, Menu, MenuItem, Tooltip, Zoom } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import './Navbar.css';
import './Media.css';
import { Link } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReduce';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addId, addName, addToken } from '../../store/tokens/actions';


export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    const name = useSelector<TokenState, TokenState["names"]>(
        (state) => state.names
    );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        dispatch(addName(''))
        dispatch(addId(0))
        alert('Usuário Deslogado');
        
        navigate('/login')
    }

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

    const handleGoLogout = () => {
        setAnchorEl(null);
        goLogout();
    };

    let navbarComponent;

    if (token != '') {
        navbarComponent = <header>
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
                <Link to='/home'>
                    <MenuItem onClick={handleCloseNav} className='menu-item-text'>Home</MenuItem>
                </Link>
                <Link to='/comprar'>
                    <MenuItem onClick={handleCloseNav} className='menu-item-text'>Feed de Produtos</MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNav} className='menu-item-text'>Carrinho</MenuItem>
                <MenuItem onClick={handleCloseNav} className='menu-item-text'>Sobre</MenuItem>
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
            <Link to='/comprar'>
                <h4 >FEED DE PRODUTOS</h4>
            </Link>

            <Link to='/sobre'>
                <h4 >SOBRE</h4>
            </Link>
            
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
                <MenuItem onClick={handleCloseUser} className='menu-item-text'>{name}</MenuItem>
                <Divider />
                <Link to='/vender'>
                    <MenuItem onClick={handleCloseUser} className='menu-item-text'>Seus Produtos</MenuItem>
                </Link>
                <MenuItem onClick={handleCloseUser} className='menu-item-text'>Cadastrar Produtos</MenuItem>
                <Link to='/login'>
                    <MenuItem onClick={handleGoLogout} className='menu-item-text'>Sair</MenuItem>
                </Link>
            </Menu>
        </div>
    </header>
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}
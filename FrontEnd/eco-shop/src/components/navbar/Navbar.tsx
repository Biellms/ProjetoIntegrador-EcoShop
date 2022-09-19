import { AccountCircle } from '@mui/icons-material';
import { Badge, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {

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
      <div className='header-menu'>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuNav}
          color="default"
        >
          <MenuIcon fontSize='large'/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNav}
        >
          <MenuItem onClick={handleCloseNav}>Home</MenuItem>
          <MenuItem onClick={handleCloseNav}>Produtos</MenuItem>
          <MenuItem onClick={handleCloseNav}>Carrinho</MenuItem>
          <MenuItem onClick={handleCloseNav}>Sobre</MenuItem>
        </Menu>
      </div>
      <div className='header-logo'>
        <h2>EcoShop</h2>
      </div>
      <div className='header-nav'>
        <h4 style={{cursor: 'pointer'}} >HOME</h4>
        <h4 style={{cursor: 'pointer'}} >SOBRE</h4>
        <h4 style={{cursor: 'pointer'}} >PRODUTOS</h4>
      </div>
      <div className='header-user'>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="default"
          >
          <Badge badgeContent={3} color='success'>
            <ShoppingCartIcon fontSize='large'/>
          </Badge>  
          </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuUser}
          color="default"
        >
        <AccountCircle fontSize='large'/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUser}
        >
          <MenuItem onClick={handleCloseUser} className='menu-item-text'>Olá, Usuário</MenuItem>
          <Divider/>
          <MenuItem onClick={handleCloseUser} className='menu-item-text'>Seus Produtos</MenuItem>
          <MenuItem onClick={handleCloseUser} className='menu-item-text'>Cadastrar Produtos</MenuItem>
          <Link to='/login'>
          <MenuItem onClick={handleCloseUser} className='menu-item-text'>Sair</MenuItem>
          </Link>
        </Menu>
      </div>
    </header>
  );
};

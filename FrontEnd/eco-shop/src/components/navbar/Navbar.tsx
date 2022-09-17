import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import './Navbar.css';

export function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
      <div className='header-logo'><h2>EcoShop</h2></div>
      <div className='header-info'>
        <span>HOME</span>
        <span>SOBRE</span>
        <span>PRODUTOS</span>
        <span>CARRINHO</span>
      </div>
      <div className='header-sair'>
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
          <MenuItem onClick={handleCloseUser}>Seus Produtos</MenuItem>
          <MenuItem onClick={handleCloseUser}>Cadastrar Produtos</MenuItem>
          <MenuItem onClick={handleCloseUser}>Sair</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

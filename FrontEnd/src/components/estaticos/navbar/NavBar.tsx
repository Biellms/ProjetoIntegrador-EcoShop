import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function NavBar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory()
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined,
    });
    history.push('/login')
  }

  let navbarComponent;

  if (token != '') {
    navbarComponent = <AppBar position="static">
      <Toolbar variant="dense" className='appbar'>
        <Link to='/home'>
          <Box className='pointer' >
            <img src="https://i.imgur.com/Hch416C.png" alt="" width="" height="200px" />
          </Box>
        </Link>
        <Box display="flex" justifyContent="start">
          <Link to='/home' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit" className='txtmenu'>
                Home
              </Typography>
            </Box>
          </Link>
          <Link to='/produtos' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit" className='txtmenu'>
                Produtos
              </Typography>
            </Box>
          </Link>
          <Link to='/categorias' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit" className='txtmenu'>
                Categorias
              </Typography>
            </Box>
          </Link>
          <Link to='/equipe' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit" className='txtmenu'>
                Equipe
              </Typography>
            </Box>
          </Link>
          <Link to='/sobre' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit" className='txtmenu'>
                Sobre
              </Typography>
            </Box>
          </Link>
        </Box>
        <Link to='/login' className='text-decorator-none'>
          <Box mx={1} className='pointer' onClick={goLogout}>
            <Typography variant="h6" color="inherit" className='txtmenu'>
              Sair
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default NavBar;
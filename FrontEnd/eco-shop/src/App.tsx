import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Cadastro } from './paginas/cadastro/Cadastro';
import { Carrinho } from './paginas/carrinho/Carrinho';
import { Equipe } from './paginas/equipe/Equipe';
import { Home } from './paginas/home/Home';
import { Login } from './paginas/login/Login';
import { Sobre } from './paginas/sobre/Sobre';

function App() {
  return (
    <> 
      <Navbar/>
    </>
  );
}

export default App;

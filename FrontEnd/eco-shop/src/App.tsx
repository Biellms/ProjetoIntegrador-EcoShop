import React from 'react';
import './App.css';
import { Cadastro } from './paginas/cadastro/Cadastro';
import { Carrinho } from './paginas/carrinho/Carrinho';
import { Equipe } from './paginas/equipe/Equipe';
import { Home } from './paginas/home/Home';
import { Login } from './paginas/login/Login';
import { Sobre } from './paginas/sobre/Sobre';

function App() {
  return (
    <> 
      <Home/>
      <Login/>
      <Cadastro/>
      <Equipe/>
      <Sobre/>
      <Carrinho/>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import './App.css';
import NavBar from './components/estaticos/navbar/NavBar';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import Sobre from './paginas/sobre/Sobre';
import Equipe from './paginas/equipe/Equipe';

function App() {
  return (

    <Provider store={store}>
      <ToastContainer />
        <Router>

          <NavBar />

          <Switch>
            <div style={{ minHeight: '100vh' }}>
              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/cadastro">
                <Cadastro />
              </Route>

              <Route path="/home">
                <Home />
              </Route>

              <Route path='/sobre'>
                <Sobre />
              </Route>

              <Route path='/equipe'>
                <Equipe />
              </Route>

              <Route path="/categorias">
                <ListaCategoria />
              </Route>

              <Route exact path='/formularioCategoria'>
                <CadastroCategoria />
              </Route>

              <Route exact path='/formularioCategoria/:id'>
                <CadastroCategoria />
              </Route>

              <Route path="/deletarCategoria/:id">
                <DeletarCategoria />
              </Route>
              
              <Route path="/produtos">
                <ListaProduto />
              </Route>

              <Route exact path="/formularioProduto">
                <CadastroProduto />
              </Route>

              <Route exact path="/formularioProduto/:id">
                <CadastroProduto />
              </Route>

              <Route path="/deletarProduto/:id">
                <DeletarProduto />
              </Route>
              
            </div>
          </Switch>

          <Footer />

        </Router>
    </Provider>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Cadastro } from './pages/cadastro/Cadastro';
import { NotFound } from './pages/notfound/Notfound';
import { Comprar } from './components/produtos/comprar/Comprar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <Login />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/cadastro' element={ <Cadastro /> } />
            <Route path='/home' element={ <Home />} />
            <Route path='/comprar' element={ <Comprar /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

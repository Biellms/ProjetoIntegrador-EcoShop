import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/estaticos/footer/Footer';
import { Navbar } from './components/estaticos/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Cadastro } from './pages/cadastro/Cadastro';
import { NotFound } from './pages/error/notfound/Notfound';
import { Comprar } from './pages/comprar/Comprar';
import { Provider } from 'react-redux';
import store from './store/store';
import { Vender } from './pages/vender/Vender';
import { VenderResp } from './pages/vender/VenderResp';
import { Sobre } from './pages/sobre/Sobre';
import { Editar } from './pages/editar/Editar';
import { Carrinho } from './pages/carrinho/Carrinho';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BackDrop } from './components/backdrop/BackDrop';
import { NetworkError } from './pages/error/networkerror/NetworkError';


function App() {

  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/comprar' element={<Comprar />} />
            <Route path='/comprar/:id' element={<Comprar />} />
            <Route path='/vender' element={<Vender />} />
            <Route path='/vender/:id' element={ <Vender />} />
            <Route path='/venderResp' element={<VenderResp />} />
            <Route path='/venderResp/:id' element={ <VenderResp />} />
            <Route path='/editar/:id' element={ <Editar /> } />
            <Route path='/carrinho' element={ <Carrinho /> } />
            <Route path='/error' element={<NetworkError />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <BackDrop />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

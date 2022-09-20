import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import { Cadastro } from './pages/cadastro/Cadastro'
import { Home } from './pages/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { NotFound } from './pages/404/404'

function App() {

  const [cartTotal, setCartTotal] = useState(0)

  function handleAddCartTotal() {
    setCartTotal(cartTotal + 1)
  }

  function handleRemoveCartTotal() {
    if (cartTotal > 0) {
      setCartTotal(cartTotal - 1)
    }
  }

  function handleRemoveAllCartTotal() {
    if (cartTotal > 0) {
      setCartTotal(0)
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cartTotal={cartTotal}/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={< Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/home' element={
            <Home 
              handleAddCartTotal={handleAddCartTotal}
              handleRemoveCartTotal={handleRemoveCartTotal}
              handleRemoveAllCartTotal={handleRemoveAllCartTotal}
                />} />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import { Cadastro } from './pages/cadastro/Cadastro'
import { Home } from './pages/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { NotFound } from './pages/404/404'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={< Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/home' element={ <Home />} />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './paginas/home/Home';
import { NotFound } from './paginas/notfound/Notfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/home" element={ <Home />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

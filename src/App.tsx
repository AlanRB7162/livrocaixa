import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Register } from './pages/Registros';
import { NewLancamento } from './pages/NewLancamento';
import { Edit } from './pages/Edit';
import { DeleteConfirmation } from './pages/Delete';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/register/nlancamento" element={<NewLancamento />}/>
          <Route path="/register/edit" element={<Edit />}/>
          <Route path="/register/delete" element={<DeleteConfirmation />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;

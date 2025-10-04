import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import RaceGoliath from './pages/RaceGoliath';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/race-goliath" element={<RaceGoliath />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
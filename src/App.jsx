import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={() => navigate('/plants')}>Get Started</button>
    </div>
  );
}

export default App;

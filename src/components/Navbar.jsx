import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalUniqueItems } from '../features/cart/CartSlice';

function Navbar() {
  const totalItems = useSelector(selectTotalUniqueItems);

  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/plants" className={({ isActive }) => (isActive ? 'active' : '')}>
        Plants
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About Us
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
        🛒 Cart ({totalItems})
      </NavLink>
    </nav>
  );
}

export default Navbar;

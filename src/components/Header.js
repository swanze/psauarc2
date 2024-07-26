import React from 'react';
import { NavLink } from 'react-router-dom';
import './csss/header.css';

function Header() {
  return (
    <div className='bdh'>
      <div className="bodi-header">
        <p><NavLink className="lforpgs" to="/">Home</NavLink></p>
        <p><NavLink className="lforpgs" to="/about">About</NavLink></p>
        <p><NavLink className="lforpgs" to="/career">Career</NavLink></p>
        <p><NavLink className="lforpgs" to="/contact">Contact</NavLink></p>
      </div>
    </div>
  )
}

export default Header
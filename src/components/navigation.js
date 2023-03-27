import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const Navigation = () => {
  return (
    <header>
      <NavLink to="/" >Liste</NavLink>
    </header>
  )
}

export default Navigation;
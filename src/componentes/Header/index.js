import React from 'react';
import Nike from "../../images/Nike.jpg";
import { Link, NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={Nike} alt='logo' width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>INICIO</NavLink>
        </li>
        <li>
          <NavLink to='/productos' activeClassName='active'>PRODUCTOS</NavLink>
        </li>
      </ul>
      <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>0</span>
      </div>
    </header>
  )
}

export default Header
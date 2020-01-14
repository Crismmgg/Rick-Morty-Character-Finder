import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/header.scss'
import PropTypes from 'prop-types';


function Header() {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo" className='logo img-fluid' />
    </div>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func
}

export default Header;
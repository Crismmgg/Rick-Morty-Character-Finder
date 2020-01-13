import React from 'react';
import Filters from './Filters';
import logo from '../images/logo.png';
import PropTypes from 'prop-types';
import '../stylesheets/header.scss'


function Header(props) {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo" className='logo img-fluid' />
      <Filters handleSearch={props.handleSearch} />
    </div>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func
}

export default Header;
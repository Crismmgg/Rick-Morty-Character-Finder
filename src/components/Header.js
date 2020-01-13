import React from 'react';
import Filters from './Filters';
import logo from '../images/logo.png';
import PropTypes from 'prop-types';


function Header(props) {
  return (
    <React.Fragment>
      <img src={logo} alt="logo" />
      <Filters handleSearch={props.handleSearch} />
    </React.Fragment>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func
}

export default Header;
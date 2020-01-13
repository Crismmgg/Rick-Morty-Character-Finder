import React from 'react';
import Filters from './Filters';
import logo from '../images/logo.png'

function Header(props) {

  return (
    <React.Fragment>
      <img src={logo} alt="logo" />
      <Filters handleSearch={props.handleSearch} />
    </React.Fragment>
  )
}


export default Header;
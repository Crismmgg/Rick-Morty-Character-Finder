import React from 'react';

function Header(props) {
  const handleSearch = (ev) => {
    props.handleSearch({
      inputValue: ev.target.value
    })

  }
  return (
    <React.Fragment>
      <label htmlFor="buscar">Busca tu personaje</label>
      <input
        type="text"
        placeholder='Introduce el nombre'
        onChange={handleSearch} />
    </React.Fragment>
  )
}

export default Header;
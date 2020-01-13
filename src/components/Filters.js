import React from 'react';
import PropTypes from 'prop-types';

function Filters(props) {
  const handleSearch = (ev) => {
    props.handleSearch({
      inputValue: ev.target.value
    })
    console.log(props)
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
Filters.propTypes = {
  handleSearch: PropTypes.func
}


export default Filters;
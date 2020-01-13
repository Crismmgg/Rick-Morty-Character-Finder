import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filter.scss'


function Filters(props) {
  const handleSearch = (ev) => {
    props.handleSearch({
      inputValue: ev.target.value
    })
    console.log(props)
  }
  return (
    <div className='filter__container'>
      <label className='filter__label' htmlFor="buscar">Busca tu personaje</label>
      <input
        type="text"
        placeholder='Ej. MariCarmen'
        className='filter__input'
        onChange={handleSearch} />
    </div>
  )
}
Filters.propTypes = {
  handleSearch: PropTypes.func
}


export default Filters;
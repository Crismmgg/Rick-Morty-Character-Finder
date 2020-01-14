import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filter.scss'


function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  const handleSearch = (ev) => {
    props.handleSearch({
      inputValue: ev.target.value
    })
  }
  return (
    <div className='filter__container'>
      <form action="" onSubmit={handleSubmit}>
        <label className='filter__label' htmlFor="buscar">Busca tu personaje</label>
        <input
          type="text"
          placeholder='Ej. MariCarmen'
          className='filter__input'
          onChange={handleSearch}
          value={props.state.inputValue} />
      </form>
    </div>
  )
}
Filters.propTypes = {
  handleSearch: PropTypes.func
}


export default Filters;
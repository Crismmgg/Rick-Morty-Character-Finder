import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filter.scss'


function Filters(props) {
  console.log(props.local)
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  const handleSearch = (ev) => {
    props.handleSearch({
      inputValue: ev.target.value
    })
  }

  const handleStatus = (ev) => {
    props.handleStatus({
      inputStatus: ev.target.value
    })
  }
  const handleLocal = (ev) => {
    props.handleLocal({
      inputLocal: ev.target.value
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
          value={props.state} />

        <label className='filter__label'>Estado de tu personaje: </label>

        <label htmlFor="status" className='radio-value mr-2 ml-2' >Vivo</label>
        <input type="radio" name='status' value='Alive' onChange={handleStatus} checked={props.checked === 'Alive'} />

        <label htmlFor="status" className='radio-value mr-2 ml-4' >Muerto</label>
        <input type="radio" name='status' value='Dead' onChange={handleStatus} checked={props.checked === 'Dead'} />

        <label htmlFor="status" className='radio-value mr-2 ml-4'>Desconocido</label>
        <input type="radio" name='status' value='unknown' onChange={handleStatus}
          checked={props.checked === 'unknown'} />

        <label htmlFor="status" className='radio-value mr-2 ml-4' >Todos</label>
        <input type="radio" name='status' value='' onChange={handleStatus} checked={props.checked === ''} />
        <label className='filter__label' >Localización</label>
        <input type="text"
          className='filter__input'
          placeholder='Ej Tierra'
          onChange={handleLocal}
          value={props.local} />

      </form>
    </div>
  )
}
Filters.propTypes = {
  handleSearch: PropTypes.func
}


export default Filters;
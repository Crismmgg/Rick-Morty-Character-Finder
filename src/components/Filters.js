import React from 'react';
import '../stylesheets/filter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faUserCheck, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';



function Filters(props) {
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
  const handleSpecie = (ev) => {
    props.handleSpecie({
      inputSpecie: ev.target.value
    })
  }

  const handleEarth = (ev) => {
    props.handleEarth({
      inputEarth: ev.target.value
    })
  }

  // const handleGender = (ev) => {
  //   props.handleGender({
  //     inputGender: ev.target.value
  //   })
  // }


  const icon = () => {
    if (props.specie === 'Alien') {
      return <FontAwesomeIcon icon={faRedditAlien} />
    } else if (props.specie === 'Human') {
      return <FontAwesomeIcon icon={faUserCheck} />
    } else {
      return <FontAwesomeIcon icon={faStar} />
    }
  }

  return (
    < div className='filter__container' >
      <form action='' onSubmit={handleSubmit}>

        <div className='filter__searchName'>
          <label className='filter__label' htmlFor="buscar">Busca tu personaje</label>
          <input
            type="text"
            placeholder='Ej. MariCarmen'
            className='filter__input'
            onChange={handleSearch}
            value={props.state} />
        </div>

        <div className='filter__status'>
          <label className='filter__label'>Estado: </label>
          <label
            htmlFor="status"
            className='label-value mr-2 ml-2' >Vivo</label>
          <input
            type="radio"
            name='status'
            value='Alive'
            onChange={handleStatus}
            checked={props.checked === 'Alive'} />
          <label
            htmlFor="status"
            className='label-value mr-2 ml-4' >Muerto</label>
          <input
            type="radio"
            name='status'
            value='Dead'
            onChange={handleStatus}
            checked={props.checked === 'Dead'} />
          <label
            htmlFor="status"
            className='label-value mr-2 ml-4'>Desconocido</label>
          <input type="radio"
            name='status'
            value='unknown'
            onChange={handleStatus}
            checked={props.checked === 'unknown'} />
          <label
            htmlFor="status"
            className='label-value mr-2 ml-4' >Todos</label>
          <input
            type="radio"
            name='status'
            value=''
            onChange={handleStatus}
            checked={props.checked === ''} />
        </div>

        <div className='filter__specie'>
          <label className='filter__label'>Especie: {icon()} </label>
          <select
            className='filter__input'
            onChange={handleSpecie}
            value={props.specie}>
            <option
              value=""
            >Todos </option>
            <option
              value="Human"
            >Humano</option>
            <option
              value="Alien"
            >Alien  </option>
          </select>
        </div>

        <div className='filter__earth'>
          <label
            htmlFor="earth"
            className='filter__label mr-2 ml-4'
          > Terrícolas</label>
          <input
            type="checkbox"
            id='earth'
            value='Earth'
            onChange={handleEarth}
          />
        </div>


        <button className='reset mt-2'
          onClick={props.handleReset}>RESET  <FontAwesomeIcon icon={faTrash} className='reset__icon mt-1' /> </button>



        {/* <div className='filter__gender'>
          <label className='filter__label' htmlFor="gender">Género:</label>
          <label
            htmlFor="female"
            className='label-value mr-2 ml-4'
          > Femenino</label>
          <input
            type="checkbox"
            id='female'
            value='Female'
            onChange={handleGender} />
          <label
            htmlFor="male"
            className='label-value mr-2 ml-4'
          > Masculino</label>
          <input
            type="checkbox"
            id='male'
            value='Male'
            onChange={handleGender} />

        </div> */}
      </form>
    </div >
  )
}
Filters.propTypes = {
  handleSearch: PropTypes.func
}


export default Filters;
import React from 'react';
import '../stylesheets/details.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



function CharacterDetails(props) {
  const { name, image, species, origin, episode, status } = props.characters
  return (
    < ul >
      < li className='detail'>
        <h2 className='detail__name'>{name}</h2>
        <div className='detail__container'>
          <img className='detail__img' src={image} alt={name} />
          <div className='detail__info'>
            <p className='detail__specie'>Especie: {species}</p>
            <p className='detail__planet'>Planeta de origen: {origin.name}</p>
            {/* {episode.map(caps => {
                return <li>{caps}</li>
              })} */}
            <p className='detail__episodes'>Nº Episodios: {episode.length}</p>
            <p className='detail__status'>Estado: {status}</p>
          </div>
        </div>
        <Link to='/'>
          <button className='detail__btn '>Volver</button>
        </Link>
      </ li>
    </ul >
  )
}

CharacterDetails.propTypes = {
  characters: PropTypes.object.isRequired
}

export default CharacterDetails;
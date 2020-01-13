import React from 'react';
import '../stylesheets/details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faUserCheck, faSkullCrossbones, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';



function CharacterDetails(props) {
  const { name, image, species, origin, episode, status } = props.characters
  const isAlien = species === 'Alien' ? <FontAwesomeIcon icon={faRedditAlien} /> : <FontAwesomeIcon icon={faUserCheck} />
  const isAlive = status === 'Alive' ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faSkullCrossbones} />
  return (
    < ul >
      < li className='detail'>
        <h2 className='detail__name'>{name}</h2>
        <div className='detail__container'>
          <img className='detail__img img-fluid' src={image} alt={name} />
          <div className='detail__info'>
            <p className='detail__specie'>Especie: {species} {isAlien}</p>
            <p className='detail__planet'>Planeta de origen: {origin.name}</p>
            {/* {episode.map(caps => {
                return <li>{caps}</li>
              })} */}
            <p className='detail__episodes'>Nº Episodios: {episode.length}</p>
            <p className='detail__status'>Estado: {status} {isAlive}</p>
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
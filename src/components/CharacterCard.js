import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/cards.scss';
import PropTypes from 'prop-types';


function CharacterCard(props) {
  const { characters } = props

  return (
    <React.Fragment>
      {characters.map(character => {
        const { id, image, name, species } = character
        const route = `/char/${id}`
        return (
          <React.Fragment>
            <li key={id} className='card p-3 m-2 col-5 col-sm-3 col-lg-2 text-center ' >
              <img className='card__img card-img-top' src={image} alt={name} />
              <h5 className='card__title card-title pt-4'>Nombre: {name}</h5>
              <p className='card__info card-text'>Especie: {species}</p>
              <Link to={route}>
                <button className='card__btn '>Más info</button>
              </Link>
            </li>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}
export default CharacterCard;
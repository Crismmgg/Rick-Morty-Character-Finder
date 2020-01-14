import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/list.scss';
import image from '../images/rickymorty.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';


function CharacterList(props) {
  const { filteredCharacters } = props
  if (filteredCharacters.length === 0) {
    return <div className='notFound'>
      <p className='notFound__info'>Oh oh...no hemos encontrado a tu personaje... <br />¡Inténtalo de nuevo! <FontAwesomeIcon icon={faLaughWink} /></p> <img className='notFound__image img-fluid' src={image} alt='Imagen Rick y Morty' />
    </div>
  } else {
    return (
      <div className='container'>
        <ul className='row container__list justify-content-center'>
          <CharacterCard characters={filteredCharacters} />
        </ul>
      </div>
    )
  }

}
CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object)
}

export default CharacterList;
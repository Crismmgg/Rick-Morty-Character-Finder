import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/list.scss';
import PropTypes from 'prop-types';


function CharacterList(props) {
  const { filteredCharacters } = props
  return (
    <div className='container'>
      <ul className='row container__list justify-content-center'>
        <CharacterCard characters={filteredCharacters} />
      </ul>
    </div>
  )
}
CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object)
}

export default CharacterList;
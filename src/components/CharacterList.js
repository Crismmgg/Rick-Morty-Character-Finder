import React from 'react';
import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types';


function CharacterList(props) {
  const { filteredCharacters } = props
  return (
    <ul>
      <CharacterCard characters={filteredCharacters} />
    </ul>
  )
}
CharacterList.propTypes = {
  filteredCharacters: PropTypes.arrayOf(PropTypes.object)
}

export default CharacterList;
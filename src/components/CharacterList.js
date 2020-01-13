import React from 'react';
import CharacterCard from './CharacterCard'

function CharacterList(props) {
  console.log(props)
  return (
    <ul>
      <CharacterCard characters={props.filteredCharacters} />
    </ul>
  )
}

export default CharacterList;
import React from 'react';

function CharacterCard(props) {
  return (
    <React.Fragment>
      {props.characters.map(character => {
        const { id, image, name, species } = character
        return (
          <li key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{species}</p>
          </li>
        )
      })}
    </React.Fragment>
  )
}
export default CharacterCard;
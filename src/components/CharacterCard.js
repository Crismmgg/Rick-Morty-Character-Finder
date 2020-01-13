import React from 'react';
import { Link } from 'react-router-dom'

function CharacterCard(props) {
  return (
    <React.Fragment>
      {props.characters.map(character => {
        const { id, image, name, species } = character
        const route = `/char/${id}`

        return (
          <li key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{species}</p>
            <Link to={route}>
              <button className=''>Más info</button>
            </Link>

          </li>
        )
      })}
    </React.Fragment>
  )
}
export default CharacterCard;
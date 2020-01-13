import React from 'react';
import { Link } from 'react-router-dom'


function CharacterDetails(props) {
  const { name, image, species, origin, episode, status } = props.characters
  return (
    < ul >
      < li >
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <h3>Información adicional</h3>
        <div>
          <p>Especie: {species}</p>
          <p>Planeta de origen: {origin.name}</p>
          {/* {episode.map(caps => {
                return <li>{caps}</li>
              })} */}
          <p>Nº Episodios: {episode.length}</p>
          <p>Estado: {status}</p>
          <Link to='/'>
            <button>Volver</button>
          </Link>
        </div>
      </ li>
    </ul >
  )
}


export default CharacterDetails;
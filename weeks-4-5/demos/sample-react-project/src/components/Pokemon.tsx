import React from 'react'

function Pokemon(props: any) {
  return (
    <div className='pokemon-container'>
        {props.pokemon.pokePic ? <img className="pokemon-pic" src={props.pokemon.pokePic} alt='pokemon' /> : null}
        <h3>{props.pokemon.pokeName}</h3>
    </div>
  )
}

export default Pokemon

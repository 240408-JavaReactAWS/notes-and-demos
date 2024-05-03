import axios from 'axios'
import React, { useState } from 'react'
import Pokemon from './Pokemon'

function Home() {

    const [pokemon, setPokemon] = useState({
        pokeId: 0,
        pokeName: '',
        pokePic: ''
    })

    // Now we need a function to gather input for the name
    let changePokeName = (event: any) => {
        // Spread operator
        // Basically allows us to input in the entire existing object and override a specific key
        setPokemon({...pokemon, pokeName: event.target.value})
    }

    let getPokemon = async () => {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokeName.toLowerCase()}`)

        console.log(response.data)

        // Store the relevant values inside state
        setPokemon({...pokemon, pokeId: response.data.id})
        setPokemon({...pokemon, pokePic: response.data.sprites.front_default})
    }


  return (
    <div className='home-page'>

        <div className='home-container'>
            <h3>Search for your Pokemon!</h3>
            <input type='text' name='pokeSearch' placeholder='Enter Pokemon Name' onChange={changePokeName}/>
            <button className='poke-button' onClick={getPokemon}>Find Pokemon</button>
            <Pokemon pokemon={pokemon}></Pokemon>
        </div>
      
    </div>
  )
}

export default Home

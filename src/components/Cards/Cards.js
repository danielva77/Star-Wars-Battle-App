import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux';

function Cards() {
    let allCharacter = useSelector(state => state.allCharacters)
    let elemento= useSelector(state => state.random)
    const reversed = elemento.reverse()
 
    if(elemento[0]){console.log("ELEMENTOOO", reversed[0].name)}


  return (
    <div>
        <div>{reversed[0] ? <h1>{reversed[0].name}</h1> : null}</div>

        <div>{reversed[1] ? <h1>{reversed[1].name}</h1> : null}</div>


    </div>
 )
}

export default Cards
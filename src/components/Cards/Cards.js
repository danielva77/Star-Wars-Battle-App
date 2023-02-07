import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux';

function Cards() {
    let elemento= useSelector(state => state.random)
    // const reversed = elemento.reverse()
    console.log("LLEGA A ELEMENTO", elemento)
 
    // if(elemento[0]){console.log("ELEMENTOOO", reversed[0].name)}
    if(elemento[0]){var array0 = elemento[elemento.length-1]}
    if(elemento[1]){var array1 = elemento[elemento.length-2]}



  return (
    <div>
        <div>{elemento[0] ? 
        <div>
          <Card
            id={array0.id}
            name={array0.name}
            image={array0.image}
            species={array0.species}
            cybernetics={array0.cybernetics}
            skinColor={array0.skinColor}
            key={array0.id}/></div>
        : null}</div>

        <div>{elemento[1] ? 
        <div>         
         <Card
            id={array1.id}
            name={array1.name}
            image={array1.image}
            species={array1.species}
            cybernetics={array1.cybernetics}
            skinColor={array1.skinColor}
            key={array1.id}/></div> 
        : null}</div>


    </div>
 )
}

export default Cards
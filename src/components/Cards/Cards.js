import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux';

function Cards() {
    let elemento= useSelector(state => state.random)
    console.log("ELEMENTOOOO", elemento)
    // const reversed = elemento.reverse()

      if(elemento[0] && elemento[1] && elemento[elemento.length-1]===elemento[elemento.length-2]){
        alert("El personaje encontrado ya se encuentra en pantalla")
        //quito el ultimo elemento
        elemento.pop();
        
      }
    // if(elemento[0]){console.log("ELEMENTOOO", reversed[0].name)}
    if(elemento[0]){var array0 = elemento[elemento.length-1]}
    if(elemento[1]){var array1 = elemento[elemento.length-2]}

  return (
    <div class="d-flex justify-content-center">
      {!elemento[0] && !elemento[1] ? <p>Busque un personaje aleatorio con el boton "Random" o busque su nombre para ver su detalle</p> : null}

        <div>{elemento[0] ? 
        <div>
          <Card
            id={array0.id}
            name={array0.name}
            image={array0.image}
            species={array0.species}
            homeworld={array0.homeworld}
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
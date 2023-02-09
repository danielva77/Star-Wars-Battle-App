import React from 'react'

function Card(props) {
  return (
    <div>
      {/* <img src={props.image} alt={props.name} width="40%"/>
      <p>{props.name}</p> */}

      <div class="card mb-3" style={{"max-width": "540px", "height":"280px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={props.image} class="img-fluid rounded-start" alt="personaje"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Personaje: {props.id} → Nombre: {props.name}</h5>
              <p class="card-text">Mundo natal: {props.homeworld}</p>
              <p class="card-text">Color de piel: {props.skinColor}</p>
              <p class="card-text"><small class="text-muted">Especie: {props.species}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
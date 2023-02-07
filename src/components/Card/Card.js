import React from 'react'

function Card(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} width="40%"/>
      <p>{props.name}</p>
    </div>
  )
}

export default Card
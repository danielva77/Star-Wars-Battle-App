import React from 'react';
import { useSelector} from "react-redux";

function List() {
    var allCharacter = useSelector(state => state.allCharacters)
    var boolean = useSelector(state => state.getAll)

  return (
    <div class="d-flex flex-column">
    {boolean && allCharacter.length>0 ? allCharacter.map(e => {
        return(
                <ul class="list-group">
                  <li class="list-group-item">{e.id}  → nombre:        {e.name}</li>
                </ul>

            // <div key={e.id}>
            //     <h1 key={e.id}>{e.name}</h1>
            // </div>
        )
    }): <p class="text-center">Haga click en el boton "Mostrar todos los personajes" para ver todos</p>}

    </div>
  )
}

export default List
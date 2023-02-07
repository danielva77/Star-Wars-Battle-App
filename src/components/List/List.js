import React from 'react';
import { useSelector} from "react-redux";

function List() {
    var allCharacter = useSelector(state => state.allCharacters)
    var boolean = useSelector(state => state.getAll)

  return (
    <div>
    {boolean && allCharacter.length>0 ? allCharacter.map(e => {
        return(
            <div key={e.id}>
                <h1 key={e.id}>{e.name}</h1>
            </div>
        )
    }): <p>La lista esta vacía</p>}

    </div>
  )
}

export default List
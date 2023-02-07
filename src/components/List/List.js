import React from 'react';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function List() {
    var allCharacter = useSelector(state => state.allCharacters)


  return (
    <div>
    {allCharacter.length>0 ? allCharacter.map(e => {
        return(
            <div key={e.id}>
                <h1 key={e.id}>{e.name}</h1>
            </div>
        )
    }): <h1>empty</h1>}

    </div>
  )
}

export default List
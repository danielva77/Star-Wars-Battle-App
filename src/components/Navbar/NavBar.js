import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getRandom } from '../../redux/actions';
import SearchBar from '../Searchbar/SearchBar';
import { getAll } from '../../redux/actions';




function NavBar() {
  const dispatch = useDispatch();
  var boolean = useSelector(state => state.getAll)




  function handleAllCharacter(e){
    e.preventDefault();
    dispatch(getAll());
  }
  function handleRandom(e){
    e.preventDefault();
    dispatch(getRandom())
  }


  
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1539/1539194.png" alt="icon" width="40px"/>

      <button onClick={(e) => {handleRandom(e)}}>Random</button>

      <button onClick={(e) => {handleAllCharacter(e)}}>{boolean ? "Borrar todos los personajes" : "Mostrar todos los personajes"}</button>

      <SearchBar/>

    </div>
  )
}

export default NavBar
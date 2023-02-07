import React from 'react';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllCharacters } from '../../redux/actions';
import SearchBar from '../Searchbar/SearchBar';
import List from '../List/List';




function NavBar() {
  const dispatch = useDispatch();
  var allCharacter = useSelector(state => state.allCharacter)
  console.log("HOLAAAAA", allCharacter)




  function handleAllCharacter(e){
    
    dispatch(getAllCharacters());

    return(
    <div>
      <List/>;
    </div>)

  }
  
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1539/1539194.png" alt="icon" width="40px"/>

      <button>Random</button>

      <button onClick={(e) => {handleAllCharacter(e)}}>Todos los personajes</button>

      <SearchBar/>

    </div>
  )
}

export default NavBar
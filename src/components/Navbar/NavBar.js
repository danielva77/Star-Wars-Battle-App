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
    <div class="container ">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/1539/1539194.png" alt="icon" width="40px"/>

      <button onClick={(e) => {handleRandom(e)}}>Random</button>

      <button onClick={(e) => {handleAllCharacter(e)}}>{boolean ? "Borrar todos los personajes" : "Mostrar todos los personajes"}</button>

      <SearchBar/> */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div class="container-fluid d-flex">
          <a href="#navbar"><button type="button" class="btn btn-info" onClick={() => window.location.reload()}>Recargar</button></a>
          {/* <a href="javascript:location.reload()"><img src="https://cdn-icons-png.flaticon.com/512/1539/1539194.png" alt="icon" width="40px"/></a> */}
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#navbar"><button type="button" class="btn btn-primary" onClick={(e) => {handleRandom(e)}}>Random</button></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#navbar"><button type="button" class="btn btn-success" onClick={(e) => {handleAllCharacter(e)}}>{boolean ? "Borrar todos los personajes" : "Mostrar todos los personajes"}</button></a>
                </li>
                <li class="nav-item">
                  <a href="#navbar" class="nav-link"><SearchBar/></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>


    </div>
  )
}

export default NavBar
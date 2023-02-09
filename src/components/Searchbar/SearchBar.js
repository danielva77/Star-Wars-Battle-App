import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacter } from "../../redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch(); //hoks
    const [name, setName] = useState(""); //estado local

    function handleInputChange(e){
      e.preventDefault();
      setName(e.target.value);
      console.log(name);
    };

    function handleSubmit(e){
      e.preventDefault();
      if(name !== ""){
      dispatch(getNameCharacter(name));
      setName("")};
      document.getElementById("inputSearch").value = "";
    };

    return(
        <div>
          <form class="d-flex" role="search">
              <input 
              type="search" id="inputSearch" aria-label="Search"
              class="form-control me-2" placeholder="Buscar ..." onChange={(e) =>{handleInputChange(e)}}
              />
              <button class="btn btn-outline-success" id="btnSearch" type="submit" onClick={(e) =>{handleSubmit(e)}}>Buscar</button>
            </form>

            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            
        </div>
    )

}
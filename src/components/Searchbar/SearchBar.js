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
      dispatch(getNameCharacter(name));
      setName("");
    };

    return(
        <div>
            <input type="text" placeholder="Buscar ..." onChange={(e) =>{handleInputChange(e)}}/>
            <button type="submit" onClick={(e) =>{handleSubmit(e)}}>Buscar 🔎</button>
        </div>
    )

}
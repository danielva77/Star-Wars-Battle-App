import axios from 'axios';

//------------------------------
export const GET_ALL_CHARACTER = "GET_ALL_CHARACTER";
export const GET_ALL = "GET_ALL";
export const GET_RANDOM = "GET_RANDOM";

//------------------------------

export function getAllCharacters(){
    return async function(dispatch){
        let json = await axios.get("https://akabab.github.io/starwars-api/api/all.json")

        return dispatch({
            type:"GET_ALL_CHARACTER",
            payload: json.data,
        });
    };
};

export function getAll(){
  return{
      type:"GET_ALL",
  }
}

export function getRandom(){
    return{
        type:"GET_RANDOM"
    }
}
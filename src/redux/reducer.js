import { GET_ALL_CHARACTER } from "./actions";

const initialState = {
    allCharacters:[]
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case GET_ALL_CHARACTER:
      return{
        ...state,
        allCharacters: action.payload
      }

    default:
      return state;
  }
}
import { 
  GET_ALL_CHARACTER,
  GET_ALL,
  GET_RANDOM } from "./actions";

const initialState = {
    allCharacters:[],
    getAll: false,
    random:[]
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case GET_ALL_CHARACTER:
      return{
        ...state,
        allCharacters: action.payload
      }
      case GET_ALL:
        const boolean = state.getAll;
        let b;
        if(boolean){b=false}else{b=true}
        return{
          ...state,
          getAll: b
        }
      case GET_RANDOM:
        const array = state.allCharacters;
        const aleatorio = array[Math.floor(Math.random() * array.length)];
        return{
          ...state,
          random:[...state.random, aleatorio]
        }

    default:
      return state;
  }
}
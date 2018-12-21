import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  // Representa los posts que viene de la acción (fetch request)
  items: [],
  // Representa el post nuevo que añadimos y recibimos en respuesta
  item: {}
}

// Función que evalua la acción recibida
export default function(state= initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // Regresa el estado actual y agrega a items, el payload que en este caso son los posts
      return {
        ...state,
        items: action.payload
      }
    // El default regresa el estad actual 
    default:
      return state;
  }
}
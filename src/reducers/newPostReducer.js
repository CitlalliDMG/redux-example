import { NEW_POST } from "../actions/types";

const newPostReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_POST.CREATE_SUCCESS:
      alert("Tu post a sido agregado");
      return {...state, newPost: action.newPost}; 
    default:
      return state;
  }
};

export default newPostReducer;
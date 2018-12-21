import { POSTS } from "../actions/types";

const loadingReducer = (state = false, action) => {
  switch(action.type){
    case POSTS.FETCH:
      return true;
    case POSTS.FETCH_SUCCESS:
      return false;
    case POSTS.FETCH_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
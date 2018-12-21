import { POSTS } from "../actions/types";

const errorReducer = (state = null, action) => {
  switch(action.type) {
    case POSTS.FETCH_FAIL:
      return action.error;
    case POSTS.FETCH:
    case POSTS.FETCH_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
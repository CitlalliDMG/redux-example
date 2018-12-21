import { POSTS, NEW_POST } from "../actions/types";

const errorReducer = (state = null, action) => {
  switch(action.type) {
    case POSTS.FETCH_FAIL:
    case NEW_POST.CREATE_FAIL:
      return action.error;
    case POSTS.FETCH:
    case POSTS.FETCH_SUCCESS:
    case NEW_POST.CREATE:
    case NEW_POST.CREATE_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
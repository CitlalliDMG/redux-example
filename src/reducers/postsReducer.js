import { POSTS } from "../actions/types";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS.FETCH_SUCCESS:
      return [...state, ...action.posts];  
    default:
      return state;
  }
};

export default postsReducer;
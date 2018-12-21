import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import postsReducer from "./postsReducer";
import errorReducer from "./errorReducer";
// import postReducer from "./betaPostReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  posts: postsReducer,
  error: errorReducer
})

export default rootReducer;
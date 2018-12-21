import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loadingReducer from "./loadingReducer";
import postsReducer from "./postsReducer";
import newPostReducer from "./newPostReducer";
import errorReducer from "./errorReducer";
// import postReducer from "./betaPostReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  posts: postsReducer,
  newPost: newPostReducer,
  error: errorReducer,
  form: formReducer
})

export default rootReducer;
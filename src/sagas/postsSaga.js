import { takeEvery, call, put  } from "redux-saga/effects"; // Objetos con significado para saga
import { POSTS } from "../actions/types";
import api from "../lib/api";
import { setPosts, setError } from "../actions/postActions";

function* handleFetchPosts() {
  try {
    // yield console.log("Aquí se hace el fetch");
    const posts = yield call(api.fetchPosts);
    // yield console.log(posts);
    yield put(setPosts(posts));
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()));
  }
}

export default function* watchPostsFetch(){
  yield takeEvery(POSTS.FETCH, handleFetchPosts);
}
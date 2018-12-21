import { takeEvery, call, put, select, takeLatest } from "redux-saga/effects"; // Objetos con significado para saga
import { POSTS, NEW_POST } from "../actions/types";
import api from "../lib/api";
import { setPosts, setError, setNewPost, setNewPostError } from "../actions/postActions";

export const getValues = state => state.form.contact.values;

function* handleFetchPosts() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()));
  }
}

function* handleNewPostCreation() {
  try{
    const values = yield select(getValues);
    // console.log(values);
    const newPost = yield call(api.fetchNewPost, values);
    // console.log(newPost);
    yield put(setNewPost(newPost));
  } catch (error) {
    yield put(setNewPostError(error.toString()));
  }
}

export default function* watchPostsFetch(){
  yield takeEvery(POSTS.FETCH, handleFetchPosts);
  yield takeLatest(NEW_POST.CREATE, handleNewPostCreation);
}
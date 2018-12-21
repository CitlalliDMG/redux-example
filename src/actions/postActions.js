import { POSTS, NEW_POST } from "./types";

const fetchPosts = () => ({
  type: POSTS.FETCH
});

const setPosts = posts => ({
  type: POSTS.FETCH_SUCCESS,
  posts
});

const setError = error => ({
  type: POSTS.FETCH_FAIL,
  error
});

const createNewPost = () => ({
  type: NEW_POST.CREATE
})

const setNewPost = newPost => ({
  type: NEW_POST.CREATE_SUCCESS,
  newPost: newPost
});

const setNewPostError = error => ({
  type: NEW_POST.CREATE_FAIL,
  error
});

export {
  fetchPosts,
  setPosts,
  setError,
  createNewPost,
  setNewPost,
  setNewPostError
};

// const newPost = () => ({
//   type: NEW_POST
// })

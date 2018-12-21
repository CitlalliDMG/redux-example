import { POSTS } from "./types";

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

export {
  fetchPosts,
  setPosts,
  setError
};

// const newPost = () => ({
//   type: NEW_POST
// })

import React, { Component } from "react";
// Conecta con el store
import { connect } from "react-redux";
// Trae la acción
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    // Aquí se llama a la acción que se esta pasando al componente a través de props
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    
    // TO DO: Corregir problema que hace que el post no aparezca hasta el segundo click
    if (prevProps.newPost !== this.props.newPost) {
      let newestPost = this.props.newPost.newPost;
      this.props.posts.unshift(newestPost);
    }
    
  }

  render() {
    const { isLoading, posts, newPost, error } = this.props;

    // console.log(Object.keys(newPost).length);

    // const newPostItem = (
    //   <div key={"post" + newPost.id}>
    //     <h3>{newPost.title}</h3>
    //     <p>{newPost.body}</p>
    //   </div>
    // );

    // TO DO: Arreglar problema de post con la misma key
    const postItems = posts.map((post,index) => (
      <div key={"post" + post.id + index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {Object.keys(newPost) > 0 ? (
          <div key={newPost.id}>
            <h3>{newPost.title}</h3>
            <p>{newPost.body}</p>
          </div>
        ) : null}
        {postItems}
        {error && <div>{JSON.stringify(error)}</div>}
        {isLoading && <p>Cargando...</p>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, posts, newPost, error }) => ({
  isLoading,
  posts,
  newPost,
  error
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});
// fetchPosts llama al fetch request
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

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

  render() {
    const { isLoading, posts, error } = this.props;    

    const postItems = posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        { postItems }
        {error && <div>{JSON.stringify(error)}</div>}
        { isLoading && <p>Cargando...</p>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, posts, error }) => ({
  isLoading,
  posts,
  error
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})
// fetchPosts llama al fetch request
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

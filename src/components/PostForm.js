import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      body:""
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      // Especifica el metodo
      method: "POST",
      // Dice que tipo de contenido sera, en este caso JSON
      headers: {
        "content-type": "application/json"
      },
      // Data que queremos enviar
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() { 
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br/>
          <div>
            <label>Body:</label><br/>
            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
 
export default PostForm;
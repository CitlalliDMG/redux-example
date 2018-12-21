import React from "react";
import { Field, reduxForm } from "redux-form";

let PostForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h1>Hacer un nuevo post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Título:</label>
          <br />
          <Field name="title" component="input" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Mensaje:</label>
          <br />
          <Field name="body" component="textarea" type="text" />
        </div>
        <br />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

PostForm = reduxForm({
  form: "contact"
})(PostForm);

export default PostForm;
// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { createNewPost } from "../actions/postActions";

// class PostForm extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       title:"",
//       body:""
//     };
//   }

//   onChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value })
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     const post = {
//       title: this.state.title,
//       body: this.state.body
//     }

//     this.props.createNewPost(post);
//     // fetch("https://jsonplaceholder.typicode.com/posts", {
//     //   // Especifica el metodo
//     //   method: "POST",
//     //   // Dice que tipo de contenido sera, en este caso JSON
//     //   headers: {
//     //     "content-type": "application/json"
//     //   },
//     //   // Data que queremos enviar
//     //   body: JSON.stringify(post)
//     // })
//     // .then(res => res.json())
//     // .then(data => console.log(data));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Add Post</h1>
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <label>Title:</label>
//             <br/>
//             <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
//           </div>
//           <br/>
//           <div>
//             <label>Body:</label><br/>
//             <textarea name="body" onChange={this.onChange} value={this.state.body}/>
//           </div>
//           <br/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   createNewPost: () => dispatch(createNewPost())
// })

// export default connect(null, mapDispatchToProps)(PostForm);

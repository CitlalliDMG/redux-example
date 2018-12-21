import React, { Component } from "react";
import { connect } from "react-redux"; 

import PostForm from "./PostForm";
import {createNewPost} from "../actions/postActions";

class PostFormContainer extends Component {
  submit = values => {
    this.props.createNewPost(values);
  }

  render() {
    return (
      <div>
        <PostForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewPost: () => dispatch(createNewPost())
})

export default connect(null, mapDispatchToProps)(PostFormContainer);

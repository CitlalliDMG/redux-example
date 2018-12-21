import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import store from "./store";
import PostFormContainer from "./components/PostFormContainer";

class App extends Component {
  render() {
    // store.dispatch({ type: "FETCH_POSTS" });
    
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Ejercicio de práctica con React, Redux y Redux-Saga
            </p>
          </header>
          <PostFormContainer />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux";
//Components
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
//Redux
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to React</p>
          </header>
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;

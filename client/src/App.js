import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/posts'
import PostInput from './components/postInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><h4>포스트 쓰기</h4></div>
        <div>
          <PostInput/>
        </div>
        <hr/>
        <div>
          <Posts/>
        </div>
      </header>
    </div>
  );
}

export default App;

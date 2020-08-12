import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/posts'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Posts/>
        </div>
      </header>
    </div>
  );
}

export default App;

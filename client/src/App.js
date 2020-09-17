import React from 'react'
import logo from './logo.svg'
import './App.scss'
import PostInput from './components/PostInput/PostInput'
import PostList from './components/PostList/PostList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="mainContent">
        <PostInput />
        <PostList />
      </div>
    </div>
  )
}

export default App

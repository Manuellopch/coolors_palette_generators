import './App.css';
import React from 'react'
import Post from "./Post";

const App = () => {
  return (
    <>
    <header>
      <h1 className='header'>Coolors Palette Generators</h1>
    </header>
    <div className="content">
      <Post />
    </div>
    </>
  )
}

export default App;

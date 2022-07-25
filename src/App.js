import React, { Component } from 'react';
import PetNav from './components/pet-nav';
import PictureBox from './components/picture-box';
import AboutBox from './components/about-box';
import Post from './components/post';
import './App.css';
const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <PetNav/>
        <div className="container">
        <div className="row">
            <PictureBox/>
            <AboutBox/>
        </div>
        <div className="row">
            <Post/>
        </div>
        </div>
      </div>
    )
  }

  return component;
}

export default App;


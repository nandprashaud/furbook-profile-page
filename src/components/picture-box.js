import React, { Component } from 'react';
import pic from './images/takota.png';
import './css/picture-box.css';


const PictureBox = () => {
    return (

<div className="col-4 picture-box">
        <img src={pic} className="pic" />
        <h3>Takota McConner</h3>
        <p className="list-group-item">"Laziness is nothing more than the habit of resting before you get tired." -Jules Renard</p>
      </div>
      
    );
}

export default PictureBox

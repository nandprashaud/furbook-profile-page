import React, { Component } from 'react'
import './css/about-box.css';


const AboutBox = () => {
    return (
        <div className="col-7 offset-1 about-box">
            <ul className="list-group">
                <p className="list-group-item heading">About</p>
                <p className="list-group-item">Age: 12</p>
                <p className="list-group-item">Occupation: Pet</p>
                <p className="list-group-item">Education: Wild Cat Academy</p>
                <p className="list-group-item">Favorite Bands: Cat Stevens, Def Leopard, Atomic Kitten, Lionel Ritchie</p>
                <p className="list-group-item">Contact Info: Meow at me at the fence behind Burger King on 242nd and Broadway</p>
                <p className="list-group-item">Relationship Status: Single</p>
                <p className="list-group-item">Places Lived: Paris, France and Bronx, New York</p>
            </ul>
        </div>
    );
}
export default AboutBox;

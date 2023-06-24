import React from "react";
import "./index.css";
import user from '../../../src/assets/user.png'
function Hero() {
	

	return (
        <div className="Hero-section">
        <div className="Hero-row" >
          <div className="Hero-text">
            <h2>Hello Welcome</h2>
            <div style={{ borderBottom: '5px solid rgb(250 204 21)', marginTop: '15px', width: '25px' }}></div>
            <h4>I m Arunesh Kumar</h4>
            <p>These is my portfolio website </p>
            <button className="Signup-btn">Contact Us</button>
          </div>
          <div className="Hero-image">
            <img className="Hero-img" src={user} alt="My Website Logo" />
          </div>
        </div>
      </div>
	);
}

export default Hero;
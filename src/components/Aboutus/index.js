import React from "react";
import "../Hero/index.css";
import user from '../../../src/assets/user.png'
import Navbar from "../Navbar/Navbar";
import './index.css'
function Aboutus() {
	

	return (
        <>
        <Navbar />
      
        <div className="Hero-section">
        <div class="about-section">
  <div class="inner-container">
    <h1>About Us</h1>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    </p>
    <div class="skills">
      <span>Web Design</span>
      <span>Photoshop & Illustrator</span>
      <span>Coding</span>
    </div>
  </div>
</div>
      </div>
      </>
	);
}

export default Aboutus;
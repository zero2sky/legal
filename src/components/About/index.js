import React from "react";
import "../Hero/index.css";
import user from '../../../src/assets/user.png'
function About() {
	

	return (
        <div className="Hero-section">
        <div className="Hero-row" >
        <div className="Hero-image">
            <img className="Hero-img" src={user} alt="My Website Logo" />
          </div>
          <div className="Hero-text">
          <h2 style={{fontWeight: 700,marginTop:30,
fontSize: 42,color:'white',marginBottom:20}}>About <span style={{color:'#FACC15'}} >Me</span></h2>
           
           
            <div style={{ borderBottom: '5px solid rgb(250 204 21)', marginTop: '15px', width: '25px' }}></div>
           
            <p style={{maxWidth:300}}>There are many variations of passages ofLorem Ipsum
available, but the majority havesuffered alteration in some 
form, by injected humour, </p>
            <button className="Signup-btn">Contact Us</button>
          </div>
          
        </div>
      </div>
	);
}

export default About;
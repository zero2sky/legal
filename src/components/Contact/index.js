import React from "react";
import "../Hero/index.css";
import user from '../../../src/assets/user.png'
function Contact() {
	return (
    <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background: '#29335c'}}>
        <h2 style={{fontWeight: 700,marginTop:30,
fontSize: 42,color:'white'}}>Contact <span style={{color:'#FACC15'}} >Me</span></h2>
           
        </div>
        <div className="Hero-section">
       
         <div className="Hero-row" >
        <div className="contact-address" >
            <p style={{color:'#FACC15'}}>Address - <span style={{color:'white'}}>840 anipur colony juammu</span></p>
            <p style={{color:'#FACC15'}}>Phone - <span style={{color:'white'}}>9906077946</span></p>
            <p style={{color:'#FACC15'}}>Email - <span style={{color:'white'}}>keshavsharma@gmail.com</span></p>
            <p style={{color:'#FACC15'}}>Website - <span style={{color:'white'}}>www.keshav.com</span></p>
          </div>
          <div className="Hero-text">
            <div style={{display:'flex',flexDirection:'column',}}>
           <input className="input" placeholder="Enter Name" />
           <input className="input" placeholder="Enter Mobile" />
           <input className="textarea" placeholder="Enter Message" />
           </div>
           
            <button className="Signup-btn">Contact Us</button>
          </div>
          
        </div>
      </div>
      </>
	);
}

export default Contact;
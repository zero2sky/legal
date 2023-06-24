import React from "react";
import "../Hero/index.css";
import user from '../../../src/assets/user.png'
function Experience() {
	

	return (
        <div className="Exp-section">
        <div style={{marginTop:50}}>
          <div className="Hero-text">
            <h2 style={{fontWeight: 700,
fontSize: 42,color:'white',marginBottom:20}}>My <span style={{color:'#FACC15'}} >Experiences</span></h2>
           
            <p>These is my experience website </p>
          </div>
          <div class="card-container">
  <div class="card">
    <p className="exp-date">June 2020-2021</p>
    <h3 style={{color:'#FACC15'}} >Experiences</h3>
    <p className="desc">These is my experience website These is my experience website These is my experience website These is my experience website These is my experience website  </p>
  </div>
  <div class="card">
    <p className="exp-date">June 2020-2021</p>
    <h3 style={{color:'#FACC15'}} >Experiences</h3>
    <p className="desc">These is my experience website These is my experience website These is my experience website These is my experience website These is my experience website  </p>
  </div>
  <div class="card">
    <p className="exp-date">June 2020-2021</p>
    <h3 style={{color:'#FACC15'}} >Experiences</h3>
    <p className="desc">These is my experience website These is my experience website These is my experience website These is my experience website These is my experience website  </p>
  </div>
</div>
        </div>
       

      </div>
	);
}

export default Experience;
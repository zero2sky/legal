import React from "react";
import "../Hero/index.css";
import user from '../../../src/assets/user.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
const carouselContainerStyles = {
 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
function About() {
	

	return (
    <>
 
        <div className="Hero-section">
        <div className="Hero-row" >
        <div className="Hero-image">
        <div style={carouselContainerStyles}>
  <Carousel showThumbs={false} swipeable={true}>
                <div>
                    <img src="https://www.cgi.com/sites/default/files/4-people-talking-standing-voice-of-our-clients-voc-medium.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2019/07/GettyImages-1129638612-724x450.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*opn1wt7cJxF3a4KnqHItVw.jpeg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
          </div>
          <div className="Hero-text">
          
            {/* <div style={{ borderBottom: '5px solid rgb(250 204 21)', marginTop: '15px', width: '25px' }}></div> */}
           
           
            {/* <button className="Signup-btn">Contact Us</button> */}
          </div>
          
        </div>
      </div>
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
    
      </>
	);
}

export default About;
import React, { useState } from "react";
import "../Hero/index.css";
import { toast } from "react-toastify";
// import "../Contactus/index.css"

function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      subject,
      userEmail: email,
      message,
    };

    try {
      const response = await fetch('https://zerotosky.pythonanywhere.com/email/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 200) {

        toast.success('Sent Successfully Thank You')
        setSubject("");
        setEmail("");
        setMessage("");
      } else {
        // Handle error response
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#29335c' }}>
        <h2 style={{
          fontWeight: 700, marginTop: 30,
          fontSize: 42, color: 'white'
        }}>Contact <span style={{ color: '#FACC15' }} >Me</span></h2>

      </div>
      <div className="Hero-section">
        <div className="Hero-row" >
          <div className="contact-address" >
            <p style={{ color: '#FACC15' }}>Address - <span style={{ color: 'white' }}>840 anipur colony juammu</span></p>
            <p style={{ color: '#FACC15' }}>Phone - <span style={{ color: 'white' }}>9906077946</span></p>
            <p style={{ color: '#FACC15' }}>Email - <span style={{ color: 'white' }}>keshavsharma@gmail.com</span></p>
            <p style={{ color: '#FACC15' }}>Website - <span style={{ color: 'white' }}>www.keshav.com</span></p>
          </div>
          <div className="Hero-text">
            <div style={{ display: 'flex', flexDirection: 'column', }}>
              <input className="input" placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)} />
              <input className="input" placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <input className="textarea" placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
            </div>

            <button className="Signup-btn" onClick={handleSubmit}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
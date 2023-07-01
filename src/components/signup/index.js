import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const[phone,setPhone]=useState('')
  const[otp,setOtp]=useState('')
  const[fname,setFname]=useState('')
  const[lname,setLname]=useState('')
  const[pw,setPw]=useState('')
  const[isOtpValidate,setIsOtpValidate]=useState(false)
  const navigate = useNavigate()
  const sendOtp = () => {
    // Validate phone number
    if (isNaN(phone) || phone.trim() === '') {
      toast.error('Invalid phone number');
      return;
    }
  
    // Call the API to send the OTP
    fetch('https://zerotosky.pythonanywhere.com/sendOtp', {
      method: 'POST',
      body: JSON.stringify({ phone: Number(phone) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          toast.success('OTP sent successfully');
        } else if (response.status === 400) {
          response.json().then(data => {
            toast.error(data.message);
          });
        } else {
          toast.error('Failed to send OTP');
        }
      })
      .catch(error => {
        console.error('Error sending OTP:', error);
      });
  };
  const Register = () => {
 
  
    fetch('https://zerotosky.pythonanywhere.com/registerUser', {
      method: 'POST',
      body: JSON.stringify({ phone: Number(phone),firstName:fname,lastName:lname,password:pw }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          toast.success('Registered successfully');
          navigate('/')
        } else if (response.status === 400) {
          response.json().then(data => {
            toast.error(data.message);
          });
        } else {
          toast.error('Failed to send OTP');
        }
      })
      .catch(error => {
        console.error('Error sending OTP:', error);
      });
  };
  const validateOtp = () => {
    // Validate phone number
    if (isNaN(phone) || phone.trim() === '') {
      toast.error('Invalid phone number');
      return;
    }
  
    // Validate OTP
    if (otp.trim() === '') {
      toast.error('OTP is required');
      return;
    }
  
    // Call the API to validate the OTP
    fetch('https://zerotosky.pythonanywhere.com/validateOtp', {
      method: 'POST',
      body: JSON.stringify({ phone: Number(phone), otp: Number(otp) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          
          toast.success('OTP validated Successfully');
          setIsOtpValidate(true)
        } else {
          // Handle the error case here
          toast.error('Wrong OTP');
        }
      })
      .catch(error => {
        console.error('Error validating OTP:', error);
      });
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Please Sign Up </h1>
      <div style={styles.formContainer}>
        <div style={styles.fieldContainer}>
          <input
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
          type="number" placeholder="Enter Phone" style={styles.input} />
          
        </div>
{!isOtpValidate ? 
<>
        <button style={{...styles.phoneButton, backgroundColor: phone.length >= 10 ? '#FACC15' : 'grey',}} disabled={phone.length > 3 ? false : true}  onClick={sendOtp}>Send Otp</button>
        <input
         value={otp}
         onChange={(e) => setOtp(e.target.value)}
         type="text" placeholder="Enter OTP" style={styles.input} />
          <button style={{...styles.phoneButton, backgroundColor: otp.length > 5 ? '#FACC15' : 'grey',}} disabled={otp.length > 3 ? false : true}  onClick={validateOtp}>Validate Otp</button>
          </> : 
          <>
          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          type="text" placeholder="Enter First Name" style={styles.input} />
          <input
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          type="text" placeholder="Enter Last Name" style={styles.input} />
      
        <input 
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="text" placeholder="Enter Password" style={styles.input} />
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>  <button style={styles.button} onClick={Register}> Sign Up</button></div>
        </> }
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#080D17',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: 42,
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  input: {
    boxSizing: 'border-box',
    margin: '5px 0 10px 0',
    padding: '10px',
    width: '350px',
    height: '43px',
    borderRadius: '6px',
    color: 'white',
    background: '#1F2937',
    border: '1px solid #000000',
  },
  phoneButton: {
    marginBottom: '10px',
    width: '80px',
    display:'flex',
    marginLeft:'auto',
    height: '25px',
   alignItems:'center',
   justifyContent:'center',
   
    border: 'none',
  },
  button: {
    padding: '10px 20px',
    border: '1px solid rgb(36, 127, 225)',
    backgroundColor: '#FACC15',
    marginTop: '10px',
    padding: '13px 27px',
    fontSize: '16px',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Signup;

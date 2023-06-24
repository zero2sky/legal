import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Back</h1>
      <div style={styles.formContainer}>
        <div style={styles.fieldContainer}>
          <input type="text" placeholder="Enter Phone" style={styles.input} />
          
        </div>
        <button style={styles.phoneButton}>Send otp</button>
        <input type="text" placeholder="Enter OTP" style={styles.input} />
        <input type="text" placeholder="Enter Password" style={styles.input} />
        <input type="password" placeholder="Confirm Password" style={styles.input} />
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> <Link to="/login"> <button style={styles.button}> Sign Up</button></Link></div>
   
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
    backgroundColor: '#FACC15',
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

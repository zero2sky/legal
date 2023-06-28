
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token, navigate]);
  const handleLogin = async () => {
    const requestBody = {
      phone: username,
      password: password
    };

    try {
      const response = await fetch('https://zerotosky.pythonanywhere.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.status == 200) {
        const user = await response.json();
        localStorage.setItem('token', JSON.stringify(user.token));
       navigate('/home')
        toast.success("Login Successfully");
      } else if (response.status != 200){
        console.log('Login failed');
        setErrorMessage('Wrong username or password. Please try again.');
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };
  return (  
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Back</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter Username"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         {errorMessage && (
          <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>
        )}
        <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{color:'white'}}>Dont have an account Try <span onClick={()=>navigate('/signup')} style={{fontSize:22,cursor:'pointer',fontWeight:'bold',color:'#facc14',marginLeft:10}}> Sign Up </span></p>
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
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
    label: {
      color: 'white',
      marginBottom: '5px',
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

export default Login
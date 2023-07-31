import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import Experience from '../Experience';
import Hero from '../Hero';
import Navbar from '../Navbar/Navbar';


function Home() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      {/* <Contact /> */}
    </div>
  );
}

export default Home;

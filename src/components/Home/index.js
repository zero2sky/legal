import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Experience from '../Experience';
import Hero from '../Hero';
import Navbar from '../Navbar/Navbar';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default Home;

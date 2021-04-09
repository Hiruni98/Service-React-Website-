import React from 'react';
import './Home.css';   //
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>

    
      <HeroSection />
      <Cards />
      <Footer />

      <h1>Home pages</h1>
      
  
    </>
  );
}

export default Home;

/*
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

*/

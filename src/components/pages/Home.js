import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ScrollToTop from '../ScrollTop';



function Home() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <HeroSection></HeroSection>
      <Cards></Cards>
    </>
  );
}

export default Home;
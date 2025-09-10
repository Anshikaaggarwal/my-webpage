import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ServiceSummary from './sections/ServiceSummary';
import Services from './sections/Services';
import ReactLenis from "lenis/react";
import About from './sections/About';
import Works from './sections/Works';
import ContactSummary from './sections/ContactSummary';
import Contact from './sections/Contact';
import { useProgress } from '@react-three/drei';

//leins is a library for smooth scrolling and scroll animations
function App() {
  const {progress } = useProgress();
  
  return (
    <> 
    {/* w-screen for full width
    min-h-screen for full height
    overflow-x-auto for horizontal scrolling if needed */}
     <div className="relative w-screen min-h-screen overflow-x-auto"> 
      <Navbar/>
      <Hero/>
      <ServiceSummary/>
       <Services/>
       <ReactLenis/>
       <About/>
      {/* <section className='min-h-screen'
      // min-h-screen for full height and gives each section full scroll space, 
      // which lets GSAP + scrub: true animate gradually instead of abruptly. That’s why transitions feel smooth.
      ></section> */}
     <Works/>
     <ContactSummary/>
     <Contact/>
      </div>
    </>
  )
}

export default App

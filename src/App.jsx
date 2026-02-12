import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Collections />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default App;

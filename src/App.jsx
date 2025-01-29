import Hero from './components/Hero';
import React from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/Navbar';
import Features from './components/Features';

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
    <Hero/>
    <About/>
    <Features/>
    </main>
    </>
  )
}

export default App

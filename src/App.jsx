import React from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
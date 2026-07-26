import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About'; 
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './index.css';

export function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
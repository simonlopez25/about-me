import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About'; // <-- 1. Importamos el componente
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './index.css';

export function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About /> {/* <-- 2. Lo renderizamos justo después del Hero */}
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
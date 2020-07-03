import React from 'react';
import { Container } from 'react-bootstrap'
import TopBar from './components/TopBar/TopBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import './App.scss';
import Projects from './components/Projects/Projects';
import Companies from './components/Companies/Companies'
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container fluid>
      <TopBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Companies />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

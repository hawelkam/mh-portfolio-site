import React from 'react';
import { Container } from 'react-bootstrap'
import TopBar from './components/TopBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import './App.scss';

function App() {
  return (
    <Container fluid>
      <TopBar />
      <Hero />
      <About />
    </Container>
  );
}

export default App;

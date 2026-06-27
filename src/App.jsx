//import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
//import Software from './components/Software';
//import Hardware from './components/Hardware';
//import Skills from './components/Skills';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="bg-light">
      {/*<Navigation />*/}
      <Hero />
      <Container>
        <section id="about" className="py-5"><About /></section>
        <section id="experience" className="py-5"><Experience/></section>
        {/*
        <section id="software" className="py-5"><Software /></section>
        <section id="hardware" className="py-5"><Hardware /></section>
        <section id="skills" className="py-5"><Skills /></section>
        <section id="contact" className="py-5"><Contact /></section>
        */}
      </Container>
    </div>
  );
}

export default App;

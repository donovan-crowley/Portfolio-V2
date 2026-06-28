import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Footer from './components/Footer'
import Blog from './components/Blog'


export default function App() {
  const[page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'blog':
        return <Blog />
      default:
        return (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects category="software" />
            <Projects category="hardware" />
            <Skills />
          </>
        );
    }
  };

  return (
    <div className="bg-black text-light min-vh-100">
      <Navigation setPage={setPage} />
      <main className="pt-5">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

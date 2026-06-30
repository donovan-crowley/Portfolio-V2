import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Footer from './components/Footer'
import Blog from './components/Blog'


export default function App() {
  const[page, setPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, [page]);

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
          </>
        );
    }
  };

  return (
    <div className="bg-black text-light d-flex flex-column min-vh-100">
      <Navigation setPage={setPage} />
      <main className="pt-5 flex-grow-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

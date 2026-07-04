import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Blog from './components/Blog'
import Home from './components/Home';
import VTOL from './pages/vtol';
import EV from './pages/ev';
import Webscraper from './pages/webscraper';
import OT from './pages/ot';
import Collage from './pages/collage';
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return(
    <BrowserRouter basename="/Portfolio-V2">
      <ScrollToTop />
      <div className="bg-black text-light d-flex flex-column min-vh-100">
        <Navigation />
        <main className="pt-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects/1" element={<VTOL />} />
            <Route path="/projects/2" element={<EV />} />
            <Route path="/projects/3" element={<Webscraper />} />
            <Route path="/projects/4" element={<OT />} />
            <Route path="/projects/5" element={<Collage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
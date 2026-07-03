import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects'

export default function Home() {
    return(
        <>
            <Hero />
            <About />
            <Experience />
            <Projects category="software" />
            <Projects category="hardware" />
        </>
    );
}
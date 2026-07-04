import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Webscraper() {
    const navigate = useNavigate();

    const handleBackToSoftware = () => {
        navigate('/', { state: { scrollTo: 'software' } });
    }

    return (
        <section className="bg-black text-light min-vh-100">
            <Container className="px-4 pt-5">
                {/* Back Button */}
                <Row className="justify-content-center">
                    <Col md={8} xs="auto">
                        <button 
                            onClick={handleBackToSoftware}
                            className="font-monospace fw-bold text-accent text-decoration-none d-flex gap-3 bg-transparent border-0"
                            style={{ 
                                letterSpacing: '0.5rem',
                                fontSize: '1.5rem',
                            }}
                        >
                            <ArrowLeft size={30} strokeWidth={2.5} />
                            ../
                        </button>
                    </Col>
                </Row>

                {/* Project Header */}
                <Row className="text-center justify-content-center">
                    <Col md={8}>
                        <h1 className="display-6 font-monospace text-light mb-3">Webscraper</h1>
                    </Col>
                </Row>


                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={8} className="text-center" style={{ fontSize: '1.5rem' }}>
                        <h3 className="text-accent mb-3 mt-4 text-start">0. The Origin</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            Data. The foundation of the modern world.
                        </p>
                        <p className="text-start mb-4">
                            For my first software personal project, I wanted to leverage what I have been taught so far under my computer science curriculum and learn more about how to interact with the data on the internet.
                        </p>
                        <p className="text-start mb-4">
                            So, I researched building a multi-purpose web scraper that would easily extract web data.
                            My vision was to be able to see multiple topics from today's weather in my area to financial reports and daily quotes in a single unified area.
                        </p>

                        <p className="text-start mb-4">
                            This project was also perfect to dive into early in my career because the term "API" was nothing more than an acronym I thought stood for "Apparently Pretty Important."
                        </p>
                        
                        <h3 className="text-accent mb-3 mt-4 text-start">1. The Web Research (pun intended)</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            Let's start at the basics.
                        </p>
                        <p className="text-start mb-4">
                            Data scientists, marketers, and researchers use web scraping tools to automate the process of collecting and parsing data, saving themselves hours of manual entry.
                            Web scraping can provide a holistic view of a subject, so people can make informed decisions, identify trends, and gain a competitive edge in their respective markets.
                        </p>
                        <p className="text-start mb-4">
                            Web scraping tools are mainly built in either Python or Node.js. 
                            Initially, I chose Node.js because I had no prior experience with it, and Node.js is a powerful server-side JavaScript environment.
                            Node.js also has two popular libraries that provide the necessary tools for a strong web scraper: Puppeteer and Cheerio.
                        </p>
                        <p className="text-start mb-4">
                            Puppeteer was built by Google to provide a high-level API over the DevTools Protocol to control headless Chrome and Chrome browsers.
                            Simply, Puppeteer automates the browsing process and allows interaction with web pages.
                        </p>
                        <p className="text-start mb-4">
                            Cheerio was designed with web scraping in mind to parse HTML, which is the standard web application framework.
                            Cheerio provides a simple and powerful API to concisely extract data from HTML documents.
                        </p>
                        <p className="text-start mb-4">
                            Now, you might be asking yourself what an API is (at least, that's what I was wondering).
                            API stands for "Application Programming Interface," and it is the way in which different software applications communicate and share data.
                        </p>
                        <p className="text-start mb-4">
                            The classic metaphor is that an API is a waiter in a restaurant that bridges the gap between the customer (an app) and the kitchen (the server), which gathers the data or performs a task.
                            The menu is the available API functions, and the food brought out is the data.
                        </p>
                        <p className="text-start mb-4">
                            Now, with that out of the way, it's time to dive into the actual project.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">2. The Simple Scrape </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            I installed Node.js on my machine with the Puppeteer and Cheerio libraries.
                            The basic logic for the script, "WebScraper.js," is in the async block ().
                        </p>
                        <p className="text-start mb-4">
                            The asynchronous sequence of the main code block starts with opening a virtual browser.
                            The browser navigates to the intended URL (in this case, the weather channel and an inspiring quotes page) and waits until the page is fully loaded.
                        </p>
                        <p className="text-start mb-4">
                            The script grabs the raw HTML and uses Cheerio to find the specific CSS class I hard-coded.
                            Then, it shuts down the virtual browser to free up the computer's memory (always need to look out for memory leaks).
                        </p>
                        <p className="text-start mb-4">
                            And there's that. Plain and simple.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">3. The Improvement </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            I then let this project sit for a few weeks and moved on to my next adventure.
                        </p>
                        <p className="text-start mb-4">
                            Fortunately, however, I have friends who are much smarter than me and have more experience to guide me on how to improve upon this project.
                            Somewhere, in this revision process, I stumbled upon the Wiki Game!
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">4. The Wiki Game </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The Wiki Game is a puzzle game where, starting on a random Wikipedia page, you must navigate to a different page using only the internal hyperlinks on each page.
                            People speed run this online, and it is quite impressive what some people can do in their free time.
                        </p>
                        <p className="text-start mb-4">
                            Anyway, as a computer scientist, it's only natural to wonder what the shortest path is between two Wikipedia pages.
                            My initial thought coming off of a semester of Data Structures was to think of each page as nodes on a tree and use a Breadth-First Search (BFS) to traverse in linear time.
                        </p>
                        <p className="text-start mb-4">
                            However, from what I have come to learn through more programming, there are reasons different algorithms exist.
                            My initial implementation also used the Puppeteer and Cheerio libraries, but the process of opening, reading, and closing browser instances was very VERY slow and inefficient.
                        </p>
                        <p className="text-start mb-4 fst-italic">
                            (I still remember waiting for an hour just for the algorithm to find a page that was one edge away)
                        </p>
                        <p className="text-start mb-4">
                            Needless to say, I had to rework my script from scratch to speed up the process and actually have fun playing the Wiki Game.
                        </p>
                        <p className="text-start mb-4">
                            For this specific puzzle, I transitioned to using Wikipedia's public API with Axios, which is designed for interacting with public APIs.
                            While this approach was faster and less memory intensive, the process took too long for my liking.
                            Code can always be optimized and improved.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">5. The Machine Learning Approach </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            For this script, I switched to Python to use the Sentence Transformer pretrained language model built on Hugging Face.
                            I also switched to using an A* Search algorithm instead of a BFS approach because the sheer volume of Wikipedia pages and high-branching graph was too complex for BFS.
                            A* Search uses a heuristic weighting system to ignore irrelevant paths and significantly improve the runtime for finding specific Wikipedia pages.
                        </p>
                        <p className="text-start mb-4">
                            The Sentence Transformers framework converts sentences, paragraphs, and images into vectors.
                            Thus, with the Sentence Transformers library, I could use cosine similarity to weigh how similar links were to the desired Wikipedia page link.
                        </p>
                        <p className="text-start mb-4">
                            A higher cosine similarity meant the link was semantically closer to the desired link.
                            Links with higher cosine similarity were pushed to the top of a priority queue to be analyzed further until the desired link was found.
                        </p>
                        <p className="text-start mb-4">
                            This improved script SIGNIFICANTLY reduced the time it took to find desired pages.
                            The time between pages "Pangaea" and "Hammer" (3 degrees of separation) reduced to mere seconds.
                            Pages 6 degrees of separation apart were found in about 17 minutes (compared to the hour it took to find a single degree of separation).
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">My Takeaway</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            This was the first project where I incorporated many Data Structures topics into real code.
                            I got to learn and interact with APIs, and I found a whole community dedicated to machine learning topics on Hugging Face.
                            Looking back, it is funny how much I learned from just wanting to easily know what the weather is.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
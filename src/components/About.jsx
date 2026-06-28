import { Col, Row, Container } from 'react-bootstrap';

export default function About() {
    return (
        <section id="about" className="py-5 bg-black text-light">
            <Container className="px-4 my-5">
                <Row className="align-items-center justify-content-center gx-5">
                    <Col md={6} className="px-4">
                        <h3 className="font-monospace mb-4 text-accent">/ whoami</h3>
                        <p className="mb-3 text-light font-monospace" style = {{ fontSize: '0.95rem', opacity: 0.8 }}>
                            I currently work as an undergraduate researcher in CWRU's Solar Durability and Lifetime Extension (SDLE) lab where I help build neural network pipelines to analyze raw data on edge devices.
                            
                        </p>

                        <p className="mb-3 text-light font-monospace" style = {{ fontSize: '0.95rem', opacity: 0.8 }}>
                            I am involved in CWRU's Vertical Take-Off and Landing (VTOL) club where I work on the software and hardware side of things.
                            Previously, I worked for the Process Automation team at Owens Corning.
                        </p>

                        <p className="mb-3 text-light font-monospace" style = {{ fontSize: '0.95rem', opacity: 0.8 }}>
                            When I'm not in front of my monitor or soldering, I run track/cross-country collegiately and attend to my other mediocre hobbies (chess, cooking, stargazing, duolingo).
                        </p>
                    </Col>

                    <Col md={4} className="d-flex justify-content-center p-3">
                        <img
                            src="/assets/whoami-headshot.png"
                            alt="About Me"
                            className="img-fluid rounded shadow border-accent"
                            style={{ maxWidth: '350px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
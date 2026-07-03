import { Tab, Nav, Row, Col, Container } from 'react-bootstrap';
import { experiences } from '../data/experiences';


export default function Experience() {

    return (
        <section id="experience" className="py-5 bg-black text-light">
            <Container className="px-4">
                <Row>
                    <Col md={{ span: 10, offset: 1}} className="offset-md-1">
                        <h3 className="font-monospace mb-5 text-accent">/ roadmap</h3>
                    
                        <Tab.Container defaultActiveKey="owens">
                            <Row className="g-0">
                                <Col md={3} className="mb-4 mb-md-0">
                                    <Nav className="flex-column nav-pills-custom">
                                        {experiences.map((exp) => (
                                            <Nav.Item key={exp.id}>
                                                <Nav.Link 
                                                    eventKey={exp.id} 
                                                    className="font-monospace text-start py-3 border-start border-2 border-transparent"
                                                >
                                                    {exp.org}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>

                                <Col md={9}>
                                    <Tab.Content className="ps-md-4">
                                        {experiences.map((exp) => (
                                            <Tab.Pane key={exp.id} eventKey={exp.id}>
                                                <div className="font-monospace mb-4">
                                                    <h4 className="text-light mb-1">{exp.title}</h4>
                                                    <h5 className="text-accent mb-2">@ {exp.org}</h5>
                                                    <small className="opacity-50">{exp.date}</small>
                                                </div>
                                                <ul className="list-unstyled font-monospace opacity-75" style={{ fontSize: '0.9rem', lineHeight: '1.8'}}>
                                                    {exp.bullets.map((bullet, i) => (
                                                        <li key={i} className="d-flex mb-3 align-items-start">
                                                            <span className="text-accent me-3" style={{ fontSize: '2rem', marginTop: '-0.35rem', lineHeight: '1', display: 'inline-block'}}>▹</span>
                                                            <span className="flex-grow-1">{bullet}</span>
                                                            
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .nav-pills-custom .nav-link {
                    color: rgba(255,255,255,0.5);
                    background: transparent;
                    border-radius: 0;
                    border-left: 2px solid transparent;
                    transition: all 0.2s ease;
                }
                .nav-pills-custom .nav-link.active {
                    color: var(--accent);
                    background: transparent;
                    border-left: 2px solid var(--accent);
                }
                .nav-pills-custom .nav-link:hover:not(.active) {
                    color: white;
                }
            `}</style>
        </section>
    );
}
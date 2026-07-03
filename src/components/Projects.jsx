import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects({ category, setPage, setActiveProject }) {
    // Filter projects based on the software/hardware
    const filteredProjects = projects.filter(p => p.category === category);

    return (
        <section id={category} className="py-5 bg-black text-light">
            <Container className="px-4">
                <Row className="justify-content-center">
                    <Col md={{ span: 10, offset: 1 }} className="ms-md-2">
                        <h3 className="font-monospace mb-5 text-accent">/ {category}</h3>
                        
                        <Row className="g-4">
                            {filteredProjects.map((proj) => (
                                <Col md={6} lg={4} key={proj.id}>
                                    <Card className="h-100 bg-black rounded border-accent p-3" style={{ borderRadius: '0' }}>
                                        
                                        <h4 className="font-monospace text-accent mb-2">{proj.title}</h4>
                                        <p className="font-monospace text-light opacity-75" style={{ fontSize: '0.9rem' }}>
                                            {proj.shortDesc}
                                        </p>
                                        <div className="mt-auto pt-3">
                                            <Link 
                                                to={`/projects/${proj.id}`} 
                                                className="font-monospace text-accent text-decoration-none"
                                            >
                                                [ View Project ]
                                            </Link>
                                            
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {proj.tags?.slice(0, 3).map((tag, i) => (
                                                <span 
                                                    key={i} 
                                                    className="font-monospace text-light" 
                                                    style={{ fontSize: '0.7rem', opacity: 0.8 }}
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .border-accent {
                    border: 1px solid var(--accent) !important;
                    transition: all 0.2s ease;
                }
                .border-accent:hover {
                    box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
}

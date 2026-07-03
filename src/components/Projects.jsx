import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects({ category }) {
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
                                        
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h4 className="font-monospace text-accent mb-0">{proj.title}</h4>
                                            
                                            {/* GitHub Button Icon */}
                                            {proj.github && (
                                                <a 
                                                    href={proj.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="d-flex align-items-center justify-content-center text-accent hover-glow"
                                                    style={{ 
                                                        flexShrink: 0,
                                                        width: '32px', 
                                                        height: '32px', 
                                                        borderRadius: '50%', 
                                                        border: '1px solid var(--accent)',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        <p className="font-monospace text-light opacity-75" style={{ fontSize: '0.9rem' }}>
                                            {proj.shortDesc}
                                        </p>
                                        <div className="mt-auto pt-3">
                                            <Link 
                                                to={`/projects/${proj.id}`} 
                                                className="font-monospace text-accent text-decoration-none"
                                            >
                                                [view project]
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
                .hover-glow:hover {
                    filter: drop-shadow(0 0 8px var(--accent));
                }
            `}</style>
        </section>
    );
}

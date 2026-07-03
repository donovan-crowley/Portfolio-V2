import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OT() {
    return (
        <section className="bg-black text-light min-vh-100">
            <Container className="px-4 pt-5">
                {/* Back Button */}
                <Row className="justify-content-center">
                    <Col md={8} xs="auto">
                        <Link 
                            to="/" 
                            className="font-monospace fw-bold text-accent text-decoration-none d-flex gap-3"
                            style={{ 
                                letterSpacing: '0.5rem',
                                fontSize: '1.5rem',
                            }}
                        >
                            <ArrowLeft size={30} strokeWidth={2.5} />
                            ../
                        </Link>
                    </Col>
                </Row>

                {/* Project Header */}
                <Row className="text-center justify-content-center">
                    <Col md={8}>
                        <h1 className="display-6 font-monospace text-light mb-3">Object Tracker</h1>
                    </Col>
                </Row>

                {/* VIDEO!!! */}
                <Row className="mb-4 justify-content-center">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img
                            src="/assets/vtol-cover.png"
                            alt="vtol drone"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '400px', width: '100%' }}
                        />
                    </Col>
                </Row>

                {/* Subheader */}
                <Row className="mb-4 text-center justify-content-center">
                    <Col md={8}>
                        <h2 className="h4 font-monospace text-accent">Won the 2025 Vertical Flight Society Design-Build-Vertical-Flight Competition</h2>
                    </Col>
                </Row>


                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h3 className="text-light mb-3 mt-4 text-start">/ Context</h3>
                        <p className="text-start">
                            At Owens Corning, the goal was to support Enterprise Material Movement Automation initiatives. 
                            The objective was to evaluate the feasibility of deploying clamp-based Autonomous Guided Vehicles (AGVs) 
                            within complex manufacturing environments (ISB).
                        </p>

                        <h3 className="text-light mb-3 mt-4 text-start">/ Technical Approach</h3>
                        <p className="text-start">
                            My approach focused on bridging the gap between theoretical automation and practical manufacturing constraints. 
                            This involved:
                        </p>
                        <ul className="mb-4 text-start">
                            <li>Reviewing existing proof-of-concept (PoC) iterations to identify historical performance hurdles.</li>
                            <li>Directly engaging with leading robotics vendors (JBT, Dematic, VisionNav) to evaluate technical limitations.</li>
                            <li>Analyzing key operational constraints including load stability, product variability, and damage risk during high-speed handling.</li>
                        </ul>

                        <h3 className="text-light mb-3 mt-4 text-start">/ Engineering Outcomes</h3>
                        <p className="text-start">
                            The core of this work resulted in a comprehensive capability assessment that defined the deployment 
                            strategy for clamp-based automation. Key deliverables included:
                        </p>
                        <ul className="mb-4 text-start">
                            <li><strong>Packaging Optimization:</strong> Partnered with engineering teams to validate packaging changes (e.g., slip sheets) that significantly reduced damage risk.</li>
                            <li><strong>Gap Analysis:</strong> Documented technical risks and operational constraints required for future scaled deployment.</li>
                            <li><strong>Strategic Roadmap:</strong> Delivered a recommended pilot phase deployment plan, now utilized by senior leadership for future automation strategy.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
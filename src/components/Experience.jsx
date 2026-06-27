import { Tab, Nav, Row, Col } from 'react-bootstrap';

export default function Experience() {
    return (
        <>
            <h3 className="font-monospace mb-4">/experience</h3>
            <Tab.Container defaultActiveKey="owens">
                <Row>
                    {/* The Vertical Navigation on the left */}
                    <Col sm={3}>
                        <Nav varient="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="owens">Owens Corning</Nav.Link>
                            </Nav.Item>
                    
                            <Nav.Item>
                                <Nav.Link eventKey="sdle">SDLE Lab</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="vtol">VTOL Club</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    {/* The Content on the right */}
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="owens">
                                <h4>Science & Technology Intern <span className="text-primary">@ Owens Corning</span></h4>
                                <p className="text-muted">Summer 2026</p>
                                <ul>
                                    <li>Bullet points....</li>
                                </ul>
                            </Tab.Pane>

                            <Tab.Pane eventKey="sdle">
                                <h4>Undergraduate Researcher <span className="text-primary">@ SDLE</span></h4>
                                <p className="text-muted">Present</p>
                                <ul>
                                    <li>Bullet points....</li>
                                </ul>
                            </Tab.Pane>

                            <Tab.Pane eventKey="owens">
                                <h4>Electronics Lead <span className="text-primary">@ VTOL</span></h4>
                                <p className="text-muted">Present</p>
                                <ul>
                                    <li>Bullet points....</li>
                                </ul>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}
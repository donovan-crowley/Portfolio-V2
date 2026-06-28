import { Col, Row, Container } from 'react-bootstrap'

export default function Skills() {
    return(
        <Container className="px-4">
            <Row>
                <Col md={{ span: 10, offset: 1}} className="offset-md-1">
                    <h3 className="font-monospace mb-5 text-accent">/ skills</h3>
                </Col>

            </Row>
        </Container>
    );
}
import { Col, Row, Container } from 'react-bootstrap'

export default function Software() {
    return(
        <Container className="px-4">
            <Row>
                <Col md={{ span: 10, offset: 1}} className="offset-md-1">
                    <h3 className="font-monospace mb-5 text-accent">/ software</h3>
                </Col>

            </Row>
        </Container>
    );
}
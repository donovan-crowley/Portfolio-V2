import { Col, Row, Container } from 'react-bootstrap'

export default function Hardware() {
    return(
        <Container className="px-4">
            <Row>
                <Col md={{ span: 10, offset: 1}} className="offset-md-1">
                    <h3 className="font-monospace mb-5 text-accent">/ hardware</h3>
                </Col>

            </Row>
        </Container>
    );
}
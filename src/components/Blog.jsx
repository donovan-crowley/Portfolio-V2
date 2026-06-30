import { Container, Row, Col } from 'react-bootstrap';

export default function Blog() {

    return(
        <section className="py-5 bg-black text-light">
            <Container className="px-4">
                <Row className="align-items-center justify-content-center">
                    <Col md={{ span: 10, offset: 1 }} className="ms-md-2">
                        <h2 className="font-monospace text-accent">/ blog</h2>
                        <p className="font-monospace opacity-75">
                            More to come with this!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
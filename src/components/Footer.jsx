import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="py-4 bg-black text-light">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <p className="font-monospace mb-1" style={{ fontSize: '0.75rem' }}>
                            Built & designed by me with Bootstrap, Vite, and React.js.
                        </p>
                        <p className="font-monospace mb-0" style={{ fontSize: '0.75rem' }}>
                            Copyright © Donovan Crowley {new Date().getFullYear()}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
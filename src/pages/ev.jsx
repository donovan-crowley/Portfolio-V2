import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EV() {
    const navigate = useNavigate();

    const handleBackToHardware = () => {
        navigate('/', { state: { scrollTo: 'hardware' } });
    }

    return (
        <section className="bg-black text-light min-vh-100">
            <Container className="px-4 pt-5">
                {/* Back Button */}
                <Row className="justify-content-center">
                    <Col md={8} xs="auto">
                        <button 
                            onClick={handleBackToHardware} 
                            className="font-monospace fw-bold text-accent text-decoration-none d-flex gap-3 bg-transparent border-0"
                            style={{ 
                                letterSpacing: '0.5rem',
                                fontSize: '1.5rem',
                            }}
                        >
                            <ArrowLeft size={30} strokeWidth={2.5} />
                            ../
                        </button>
                    </Col>
                </Row>

                {/* Project Header */}
                <Row className="text-center justify-content-center">
                    <Col md={8}>
                        <h1 className="display-6 font-monospace text-light mb-3">Electric Vehicle</h1>
                    </Col>
                </Row>

                {/* Image */}
                <Row className="mb-2 justify-content-center">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img
                            src="/assets/car-cover.png"
                            alt="electric vehicle"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '600px', width: '100%' }}
                        />
                    </Col>
                </Row>

                <Row className="mb-4 justify-content-center text-center">
                    <p className="font-monotone d-flex justify-content-center fst-italic">
                        (Yes that is me driving ... you can tell by the stellar outfit)
                    </p>
                </Row>

                {/* Subheader */}
                <Row className="mb-4 text-center justify-content-center">
                    <Col md={8}>
                        <h2 className="h4 font-monospace text-accent">Placed 3rd of roughly 15 teams at the 2024 Lime Rock Park Electrathon Competition</h2>
                    </Col>
                </Row>


                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={8} className="text-center" style={{ fontSize: '1.5rem' }}>
                        <h3 className="text-accent mb-3 mt-4 text-start">0. The Origin</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            I had just started my freshman year of high school, and my friend and I joined our school's engineering club.
                            A year prior, a then-senior student ordered parts to build an electric vehicle.
                            So, my friend and I took on the challenge to take these parts and put them together to build an electric vehicle.
                            Easy peasy.
                        </p>
                        <p className="text-start mb-4">
                            WE COULD NOT HAVE BEEN MORE MISTAKEN!!!
                        </p>
                        <p className="text-start mb-4">
                            We had to drill many holes in the giant polycarbonate frame for the chassis and other components to fit together.
                            Many parts were missing to connect key components, and not to mention the steering wheel wasn't even a wheel.
                            It was two bars sticking out of the sides to turn the tires.
                        </p>
                        <p className="text-start mb-4">
                            You get the gist.
                            It was much more difficult than just putting together some LEGOs.
                        </p>

                        <div className="text-start">
                            <h3 className="text-accent mb-3 mt-4 text-start">1. The Breakdown</h3>
                            <hr className="border-accent opacity-75 my-2" />
                            <p className="text-start mb-4">
                                Major components of the electric vehicle were as follows:
                            </p>
                            <ul className="list-unstyled p-1 m-0">
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Power:</strong> Two 12V lead-acid batteries (series connection)
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Control:</strong> Alltrax motor controller
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Drive:</strong> DC motor (2800 RPM)
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Brake:</strong> Bicycle disc brake system
                                </li>
                            </ul>

                            <p className="text-start mb-4">
                                Tools I experimented with and used were:
                            </p>
                            <ul className="list-unstyled p-1 m-0">
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">CAD/Manufacturing:</strong> Fusion360, 3D printer, Milling Machine
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Electronics:</strong> Soldering iron
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Fastening:</strong> Hot glue gun, string, tape
                                </li>
                                <li className="mb-2">
                                    <span className="text-accent me-2">▹</span> 
                                    <strong className="text-accent">Measurement:</strong> Digital multimeter
                                </li>
                            </ul>
                        </div>


                        <h3 className="text-accent mb-3 mt-4 text-start">2. The Process</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            Initially, I drilled holes in the chassis to make way for the chassis, batteries, and motors.
                            The extremely protruding mirrors had no way of connecting to the rounded frame, so this was the first 3D print I did to secure the mirrors.
                        </p>
                        <p className="text-start mb-4">
                            We eventually had all the right components attached and laid out on the car, but we ran into our biggest problem: the circuit.
                            Looking back, I find it funny where my interests eventually took me because this circuit caused me so many problems (maybe Stockholm syndrome).
                        </p>
                        
                        <img
                            src="/assets/car-schematic.jpg"
                            alt="electric vehicle"
                            className="img-fluid mb-4 rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '700px', width: '100%' }}
                        />
                            
                        <p className="text-start mb-4">
                            As you can see, we had to make some major modifications.
                            We did not have some of the components listed in the original design, and the circuit never ended up working.
                        </p>
                        <p className="text-start mb-4">
                            The simplest loop in the circuit was connecting the controller pins to the potentiometer as shown in the original schematic.
                            The rest of the circuit was not as easy.
                        </p>
                        <p className="text-start mb-4">
                            I had to research, continuously redesign, and test the circuit until we got the results shown above.
                            We also incorporated a brake light and display monitor to accommodate the competition requirements and give ourselves better data analysis of our drives.
                        </p>
                        <p className="text-start mb-4">
                            I still remember the joy of first watching the motor spin.
                            I could not believe my eyes.
                            I thought it was complete magic, and I honestly had so many doubts about whether it was even possible.
                        </p>
                        <p className="text-start mb-4">
                            There is still no modern car or go-kart racer that could give me the same joy I had when first riding something I built.
                        </p>
                        <p className="text-start mb-4">
                            We made many modifications to this original design, including getting a new chassis and acrylic frame, smaller mirrors, and sprockets to better match our design of a 6:1 motor-to-sprocket ratio.
                        </p>
                        <p className="text-start mb-4">
                            I also had the idea to cut up a lawn chair and have the base act as a hammock for your back (I should get a degree in ergonomics because it was SUPER comfy).
                        </p>
                        <p className="text-start mb-4">
                            The new frame better allowed us to distribute our weight with batteries and electronics in the back and a ballast (weights) in the front.
                        </p>
                        <p className="text-start mb-4">
                            Some other modifications included 3D-printed components that would protect the electronics just in case we encountered a fender bender.
                        </p>
                        

                        <h3 className="text-accent mb-3 mt-4 text-start">3. The Journey</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The Lime Rock competition is an endurance competition where the car that can go the furthest in an hour wins.
                        </p>
                        <p className="text-start mb-4">
                            The first time we participated in the Lime Rock competition, we had just gotten the car to start a few days before.
                            It was honestly a miracle just to see the car move when we got there.
                        </p>
                        <p className="text-start mb-4">
                            That movement, however, did not last long, and we eventually ran out of enough battery life to support our car (especially up hills).
                            But the biggest win from this competition was that the car moved (pretty basic in text, but it's more how we got there).
                        </p>
                        <p className="text-start mb-4">
                            For our second time, we had a little experience under our belt and properly charged the batteries the night before. 
                            This time we had the new chassis and more efficient car.
                            The competition requires there to be a switch between drivers at some point in the race, and for this trip, I was the second driver.
                        </p>
                        <p className="text-start mb-4">
                            I never got the chance to drive, however, because our car got a flat tire about 15-20 minutes into the race.
                        </p>

                        <p className="text-start mb-4">
                            There was definitely a little bit of 
                            <span className="text-accent fw-bold"> ✨ charm ✨</span>
                            the third time around. 
                            We decided I would be the first driver this time, seeing as I didn't get to drive at all the second time.
                        </p>
                        <p className="text-start mb-4">
                            So I got my 30 minutes of fun in the car, and I kept the car between 35-40 MPH. 
                            This range was calculated to maximize our draw of power and speed.
                        </p>
                        <p className="text-start mb-4">
                            What we didn't necessarily account for in our calculations was regenerative braking which had a larger effect than we originally imagined.
                            We ended up getting a flat tire with four minutes left in the competition and still had plenty of battery left to use.
                        </p>
                        <p className="text-start mb-4">
                            Thankfully, we still placed third, which was awesome progression to be a part of since we had started from absolutely nothing.
                        </p>
                        <p className="text-start mb-4">
                            Once I graduated, the peers I had taught and learned with ended up increasing that speed range and winning the competition.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
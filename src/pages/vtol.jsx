import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VTOL() {
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
                        <h1 className="display-6 font-monospace text-light mb-3">Vertical Take-Off and Landing</h1>
                    </Col>
                </Row>

                {/* Image */}
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
                    <Col md={8} className="text-center" style={{ fontSize: '1.5rem' }}>
                        <h3 className="text-accent mb-3 mt-4 text-start">0. The Origin</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            This is an ongoing project with many different modifications/updates.
                        </p>
                        <p className="text-start mb-4">
                            I have been in VTOL since my freshman year of college, and I have worked on the software and hardware aspects.
                        </p>
                        <p className="text-start mb-4">
                            CWRU VTOL was established the year before I joined, and we work to build a drone to compete in the Vertical Flight Society Design-Build-Vertical-Flight Competition.
                            The rules and missions for the competition change every year, so there is always something exciting to look forward to.
                        </p>
                        <p className="text-start mb-4">
                            VTOL is a great club to be in for advancing and learning about aviation, and I like the real-world implications.
                            Drones can go into hard-to-reach areas affected by wildfires or other natural disasters and provide supplies/resources.
                        </p>
                        <p className="text-start mb-4">
                            And also, who doesn't like to fly a drone?
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">1. The Drone</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The main drone is built with six arms with corresponding motors and propellers.
                            The Pixhawk (PX6) is the flight controller and acts as the brain for the flight.
                            It reads the low-level sensors like the Inertial Measurement Unit (IMU), barometer, and compass.
                        </p>
                        <p className="text-start mb-4">
                            A companion computer (in our case, the Raspberry Pi) manages the high-level intelligence and sensor processing of the missions.
                            It performs advanced operations such as inferencing images through computer vision pipelines and communicating with electromagnets and LiDAR.
                        </p>
                        <p className="text-start mb-4">
                            The actuators on the drone are the Electronic Speed Controllers (ESCs).
                            They receive Pulse Width Modulation (PWM) signals from the Pixhawk to adjust individual motor speeds.
                        </p>
                        <p className="text-start mb-4">
                            Our drone also includes an RTK system to provide highly accurate (to the cm) global positioning data.
                        </p>
                        <p className="text-start mb-4">
                            The software includes programming the devices, protocols, and Ground Control Station (GCS).
                            The MAVLink protocol links the Pixhawk, Raspberry Pi, and GCS by exchanging telemetry (real-time data transmission) and command messages.
                            Other communication links between the drone and GCS include TBS CrossFire and Express Long Range System (ELRS) telemetry radios.
                        </p>
                        <p className="text-start mb-4">
                            The aforementioned PWM protocol is what the Pixhawk uses to adjust the ESCs.
                            The Raspberry Pi sends a MAVLink command to the Pixhawk, and the Pixhawk translates that command into motor commands by adjusting the PWM duty cycle.
                        </p>
                        <p className="text-start mb-4">
                            The UART protocol sends data one bit at a time over two wires: TX (Transmit) and RX (Receive).
                            The Pixhawk uses UART to communicate with the radio, RTK, and ESP (if we have one).
                        </p>
                        <p className="text-start mb-4">
                            The Inter-Integrated Circuit (I2C) protocol includes Serial Data (SDA) and SCL (Serial Clock).
                            The SDA carries the actual data, and the SCL synchronizes the data transfer through a clock line.
                            The SCL allows the Pixhawk to control the timing of every bit.
                            I worked with I2C to develop the LiDAR system.
                        </p>
                        <p className="text-start mb-4">
                            We used QGroundControl for the GCS logic and user interface.
                            The software allowed us to monitor flight status.
                            Separate communication with the Pi allowed us to issue commands such as mission start and drop procedures.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">2. The Process</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            My freshman year, I really did not understand much of anything on the software or hardware side.
                            It was a struggle to understand Git and how to program devices like an ESP32.
                        </p>
                        <p className="text-start mb-4">
                            I also learned how to properly solder.
                            As shown in the schematic below, I assembled 6 PCBs that connected the Pixhawk with each of the 6 motors on the drone.
                        </p>
                        <img
                            src="/assets/vtol-schematic.jpg"
                            alt="vtol drone"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '750px', width: '100%' }}
                        />
                        <p className="text-start mb-4">
                            In my second year, I had a more active role.
                            I worked on setting up the Raspberry Pi Model B and developing the computer vision pipeline.
                        </p>
                        <p className="text-start mb-4">
                            Setting up the Raspberry Pi was more challenging than I initially thought (because it's almost like it's designed for beginners).
                            Working around the school's WiFi network system (my friend works in IT, so I'm allowed to hate) presented many recurring challenges, as it often caused access timeouts.
                            The way I initially solved this problem was through power cycles, flashing the SD card, and/or disconnecting and reconnecting the Ethernet cable.
                        </p>
                        <p className="text-start mb-4">
                            Since it's impractical to do these procedures many times, I needed to find a permanent solution to configure the Raspberry Pi wirelessly.
                            I ended up configuring the Pi as a universal access point using the Tailscale VPN and a Panda Wireless USB Adapter.
                        </p>
                        <img
                            src="/assets/vtol-picli.png"
                            alt="vtol drone"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '750px', width: '100%' }}
                        />
                        <p className="text-start mb-4">
                            Once that was settled, I used the Pi to control the electromagnet of the drone and detect distinct ArUco markers (shown below).
                            OpenCV's ArUco markers provide pose estimation, which would give a rough estimate of where the drone is in relation to the markers.
                            We used the markers to show the drone where the payloads were, and the drone could make corrections accordingly during descent.
                        </p>
                        <img
                            src="/assets/vtol-aruco.png"
                            alt="vtol drone"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '750px', width: '100%' }}
                        />
                        <p className="text-start mb-4">
                            I have also since worked with the LiDAR (light detection and ranging) system through the I2C protocol.
                            LiDAR provides the drone's altitude.
                            I had a fun time (sarcasm; this was actually quite difficult) rewriting Garmin's driver script into a C++ class.
                        </p>

                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
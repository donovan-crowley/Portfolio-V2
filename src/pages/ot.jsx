import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OT() {
    const navigate = useNavigate();

    const handleBackToSoftware = () => {
        navigate('/', { state: { scrollTo: 'software' } });
    }

    return (
        <section className="bg-black text-light min-vh-100">
            <Container className="px-4 pt-5">
                {/* Back Button */}
                <Row className="justify-content-center">
                    <Col md={8} xs="auto">
                        <button 
                            onClick={handleBackToSoftware} 
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
                        <h1 className="display-6 font-monospace text-light mb-3">Object Tracker</h1>
                    </Col>
                </Row>

                <Row className="mb-4 justify-content-center">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img
                            src="/assets/ot-cover.png"
                            alt="grayscale image of me"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '800px', width: '100%' }}
                        />
                    </Col>
                </Row>

                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={8} className="text-center" style={{ fontSize: '1.5rem' }}>
                        <h3 className="text-accent mb-3 mt-4 text-start">0. The Origin</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            In my first year of college, I had limited experience with computer vision and OpenCV.
                            When I joined VTOL, I played with an ESP32 and its camera, but I didn't really understand most of what I was doing.
                        </p>
                        <p className="text-start mb-4">
                            So, I built this personal project to get a better understanding of object detection.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">1. The Script</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            This script is a real-time object tracking algorithm in C++ using OpenCV.
                            The program captures live video from a webcam using OpenCV's VideoCapture.
                        </p>
                        <p className="text-start mb-4">
                            The class "ObjectTracker" operates as a Finite State Machine with SEARCH (State 0), TRAIN (State 1), TRACK (State 2), and READ (State 3).
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">2. The Search (State 0) </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The default mode of the script is the search mode.
                            This mode converts the frames to grayscale and detects circular objects using the Hough Circle Transform algorithm.
                            A red circle is displayed over the image to show the circle detected by the algorithm.


                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">3. The Train (State 1) </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            When the search mode "locks-in" on an object, and the red circle outlines the object you desire to track, the script can enter the train mode.
                        </p>
                        <p className="text-start mb-4">
                            Pressing the 't' key freezes the display, and the program proceeds to iteratively isolate the object from its background.
                            The script samples pixels inside and outside the circle to calculate HSV (Hue, Saturation, Value) thresholding bounds.
                        </p>
                        <p className="text-start mb-4">
                            The program iteratively adjusts the threshold values to maximize the difference between the internal and external HSV values of the circle.
                            When the optimal threshold is found, the program automatically transitions into the tracking mode.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">4. The Track (State 2) </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The tracking mode uses the learned HSV range to create a binary mask.
                            During this state, the script performs morphological operations through the thresholding function described below.
                        </p>
                        <p className="text-start mb-4">
                            The program uses image moments to calculate the center of mass of the object. 
                            An image moment is the weighted average of the pixels' intensities.
                            The program traces a residual line following where the center of mass of the object has been.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">5. The Read (State 3) </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            I used the read mode during the development of this project to familiarize myself with OpenCV HSV values. 
                            This mode calculates the HSV values within a particular fixed region to display real-time values.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">6. The Thresholding </h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            I included a thresholding function to reduce noise through a BGR (Blue, Green, Red) to HSV (Hue, Saturation, Value) conversion.
                            The reason for this is that HSV is better at handling lighting changes than BGR.
                            The function then creates a binary mask using this new HSV image.
                        </p>
                        <p className="text-start mb-4">
                            To filter out noise from this new image, the thresholding function employs opening and closing operations through erode and dilate.
                        </p>
                        <p className="text-start mb-4">
                            During the morphological opening operation, the erode function shrinks the foreground object by eliminating pixels and small noise.
                            The dilate function then expands the image to its original size.
                        </p>
                        <p className="text-start mb-4">
                            During the morphological closing operation, the dilate and erode functions are reversed to smooth the contours of the image.
                        </p>
                        <p className="text-start mb-4">
                            A heavy Gaussian Blur (51x51 kernel) is applied to ensure the tracking object remains clean and solid.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">7. The Action</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <div className="my-4">
                            <video 
                                className="w-100 rounded shadow" 
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/video/ot-train.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-start mb-4 fst-italic" style={{ fontSize: '1.2rem' }}>
                            TL;DR: The tracking phase iteratively compares the internal and external pixel averages of the circular object to find the greatest difference and isolate the object from the background noise.
                        </p>

                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
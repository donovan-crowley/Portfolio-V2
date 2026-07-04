import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Collage() {
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
                        <h1 className="display-6 font-monospace text-light mb-3">Photo Text Collage</h1>
                    </Col>
                </Row>

                {/* Image */}
                <Row className="mb-4 justify-content-center">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img
                            src="/assets/collage-cover.png"
                            alt="collage photo"
                            className="img-fluid rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '400px', width: '100%' }}
                        />
                    </Col>
                </Row>

                <Row className="mb-4 justify-content-center text-center">
                    <p className="font-monotone d-flex justify-content-center fst-italic">
                        Made with some of my favorite things (star wars, rocky, tame impala, fleetwood mac)
                    </p>
                </Row>


                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={8} className="text-center" style={{ fontSize: '1.5rem' }}>
                        <h3 className="text-accent mb-3 mt-4 text-start">0. The Origin</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            When I walk into the basement of my grandparents' house, there is a picture that has always stuck with me.
                            From the top of the stairs, the picture looks like the Statue of Liberty with little scratches here and there.
                            But when you get closer, you start to realize that the Statue of Liberty is the outline of multiple smaller images.
                        </p>
                        <p className="text-start mb-4">
                            My grandparents' basement picture sparked the idea for this project.
                            The idea here is to have an input of multiple images with a desired design and produce that design through a photo collage.
                        </p>
                        <p className="text-start mb-4">
                            And trust me when I say, this makes for really good Christmas cards. 
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">1. The Pipeline</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            Once the application is compiled, the input is a zip file filled with images, a text file with a pattern for the images to make, the desired number of pixels, and the output image path.
                            The pipeline has the following scripts: parser, loader, and collage.
                        </p>
                        <p className="text-start mb-4">
                            The parser converts the text file into a boolean map where characters are the foreground pixels and empty/space characters are the background pixels.
                        </p>
                        <p className="text-start mb-4">
                            I wrote and continuously revised the loader file with memory-efficient extraction in mind.
                            The loader reads raw bytes from a ZIP file and then decodes them.
                            This sequential process was very memory efficient and eliminates the concern for the number of images in the ZIP file.
                        </p>
                        <p className="text-start mb-4">
                            The loader file continues by computing the mean color (BGR) of each image and then caching those values for later processing.
                        </p>
                        <p className="text-start mb-4">
                            The collage script has two key components: clustering and synthesis. 
                            The clustering aspect uses K-Means (unsupervised learning - more on this later) clustering to separate images based on their average BGR values.
                            Essentially, the images are divided into 2 groups: darker and brighter images.
                        </p>
                        <p className="text-start mb-4">
                            The synthesis part is where all the prior steps come together.
                            The script generates the image by mapping the boolean pattern from the parser onto a grid.
                            It then iterates through the map and selects a random image from the respective bucket (foreground/background) to put in that place.
                        </p>
                        <p className="text-start mb-4">
                            The image is resized to the pixel size input and stitched onto an OpenCV Mat canvas in its Region of Interest (ROI).
                        </p>


                        <h3 className="text-accent mb-3 mt-4 text-start">2. The Process</h3>
                        <hr className="border-accent opacity-75 mb-4" />
                        
                        <img
                            src="/assets/collage-text.png"
                            alt="collage photo"
                            className="img-fluid mb-4 rounded shadow border-accent bg-accent"
                            style={{ maxWidth: '600px', width: '100%' }}
                        />
                        <p className="text-start mb-4">
                            The most interesting challenge of this project was figuring out which photos should be in the foreground group or background group.
                            I initially tried to sort the images by brightness, but this produced collages where it was hard to see the pattern (if at all).
                        </p>
                        <p className="text-start mb-4">
                            To solve this challenge, I implemented the K-Means clustering algorithm to analyze the average color of every photo in 3D space.
                            This algorithm helped the program determine subsets of images that are the most distinct and make the best contrasts between the foreground and background.
                        </p>
                        <p className="text-start mb-4">
                            The script draws the pattern that was provided by the text file with one ground (foreground images) and uses the remaining images to create the background.
                        </p>
                        <p className="text-start mb-4">
                            I also added a slight filter over the foreground images to exaggerate the contrast and make the message clearer.
                        </p>

                        <h3 className="text-accent mb-3 mt-4 text-start">3. The K-Means Approach</h3>
                        <hr className="border-accent opacity-75 my-2" />
                        <p className="text-start mb-4">
                            The use of K-Means was an efficient way to initialize cluster centers through unsupervised learning.
                            Unsupervised learning is a type of machine learning where the algorithm uses unlabeled data without predefined instructions to train a model.
                            So, in my script, the K-Means approach classified raw images by itself without guidance.
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
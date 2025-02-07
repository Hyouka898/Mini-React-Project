import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import img1 from "../../assets/image/Emails-bro.png";
export default function AppQuestionCmm() {
    return (
        <section class="sec-1-contact ">
            <div className='overlay d-flex align-items-center'>
                <Container className=''>
                    <Row className=" d-flex  w-100">
                        <Col xl={7} className=' '></Col>
                        <Col xl={5} className=' '>
                            <div className="title-form ">
                                <h2 className='text-light'>Do you have any questions??</h2>
                                <p className="fs-6 mt-3 text-light">You can contact our Latte Coding team by filling out the information below. </p>
                                <Row>
                                    <Col xl={6}>

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="FirtName"
                                            className="mb-3 "
                                        >
                                            <Form.Control className=' text-light' type="text" placeholder="name@example.com" />
                                        </FloatingLabel>

                                    </Col>
                                    <Col xl={6}>
                                        <FloatingLabel controlId="floatingPassword" label="Lastname">
                                            <Form.Control type="text" placeholder="Password" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xl={6}>
                                        <FloatingLabel controlId="floatingPassword" label="Email">
                                            <Form.Control type="email" placeholder="Password" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xl={6}>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-submit px-3" type="submit">Submit</button>
                            </div>
                        </Col>
                        {/* <Col xl={7}>
                        <div className="title-form " data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="1500">
                            <Image className=' w-100 h-75 object-fit-cover' src={img1} />
                            
                        </div>

                    </Col> */}
                    </Row>
                </Container>
            </div>

        </section>
    )
}
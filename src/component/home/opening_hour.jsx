import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from "../../assets/image/openning-image.jpg";
import img2 from "../../assets/image/openning-imag2.jpg";
export default function AppOpenning() {
    return (
        <section className='sec-2 mt-5 '>
            <Container>

                <Row>
                    <Col sm={6}>
                        <Image className='open-image-1 w-100 rounded-4' src={img1} />
                    </Col>
                    <Col sm={6}>
                        <div className='box-2 w-100'>
                            <Image className='open-image-2 w-100 rounded-3' src={img2} />
                            <div className='overlay'>
                                <h2 className=' text-light text-center mt-5 mb-5'>OPENING HOURE & RESERVATION</h2>
                                <Row>
                                    <Col>
                                        <div className=' text-start ps-5 text-white'>
                                            <p>Monday-Friday // 9:00 - 22:00</p>
                                            <p>Saturday // 10:00 - 22:00</p>
                                            <p>Sunday // 10:00 - 23:00</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className=' text-end pe-5 text-white'>
                                            <p>Booking Numbber</p>
                                            <p>(097)266-7448</p>
                                            <p>(096)229-2633</p>
                                        </div>
                                    </Col>
                                </Row>


                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
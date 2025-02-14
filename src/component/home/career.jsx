import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import waiter from '../../assets/image/waiter.jpg';

export default function AppCareer() {
    return (
        <section className='sec-4-career my-5  py-5'>
            <Container>
                <Row className=' '>
                    <Col xl={7} className=' '>
                        <div className=' d-flex align-items-center h-100 w-100'>
                            <div className='career-tittle '>
                                <p>WORK WITH US</p>
                                <h1 className=' fs-1 fw-bold'>SHAP OF YOU CAREER</h1>
                                <p className=' fs-5 pe-5 mt-2 mb-4'>Our fast-growing Chatime network is always on the lookout for fun and talented individuals like you.Embrace your entrepreneurial spirit and invest in your future with Chatime, a global franchise business.</p>
                                <button className='btn btn-contactus py-2 px-3 fs-5 '>Contact us</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} className='align-items-center'>
                        <Image className=' career-image w-100 h-100 object-fit-cover ' src={waiter} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
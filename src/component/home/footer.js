import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function AppFooter() {
    return (
        <footer className="pt-5 pb-2">
            <Container>
                <Row>
                    <Col xl={3}>
                        <div className=" pe-5">

                            <a className="fs-3 text-decoration-none text-light fw-bold" href="#">LatteCoding</a>
                            <p className="mt-3 title">This website was created to allow customers to purchase or view details about our shop, LatteCoding, with ease and convenience in selecting their favorite beverages, while ensuring comfort, suitability, and increased trust.
                            </p>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <p className="title fs-4">Link</p>
                        <a className="foot-link mt-3" href="#">Delivery</a>

                        <a className="foot-link mt-3" href="#">Contact </a>

                        <a className="foot-link mt-3" href="#">About us</a>

                        <a className="foot-link mt-3" href="#">Login</a>
                    </Col>
                    <Col xl={3}>
                        <p className=" fs-4 title">Menu</p>
                        <a className="foot-link mt-3" href="#">Ice Latte</a>
                        <a className="foot-link mt-3" href="#">Ice Latte</a>
                        <a className="foot-link mt-3" href="#">Ice Latte</a>
                        <a className="foot-link mt-3" href="#">Ice Latte</a>

                    </Col>
                    <Col xl={3}>
                        <p className="title fs-4">Contact</p>
                        <p className="title "><i className="bi bi-geo-alt-fill me-2"></i>Phnom Penh</p>
                        <p className="title"><i className="bi bi-telephone-fill me-2"></i>(097)266-7448</p>
                        <p className="title "><i className="bi bi-envelope-at-fill me-2"></i>ouyponlouer@gmail.com</p>
                        <div>
                            <a className="socail-link" href="#"><i class="fa-brands fa-facebook"
                                style={{ color: '#5676ff' }}></i></a>
                            <a className="socail-link" href="#"><i class="fa-brands fa-telegram "
                                style={{ color: '#5676ff' }}></i></a>
                            <a className="socail-link " href="#"><i class="fa-brands fa-instagram"
                                style={{ color: '#5676ff' }}></i></a>

                        </div>

                    </Col>
                </Row>
            </Container>
            <hr/>
            <p className="text-center mt-2 title">Copyright LatteCoding.All Rights Reserved Designed by 4DemonsTeam</p>
        </footer>
    )
}
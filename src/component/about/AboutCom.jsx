import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Charlie from '../../assets/image/Charlie.jpg';
import me from '../../assets/image/me.jpg'
import bomnong from '../../assets/image/Bomnong.jpg';
import sokneang from '../../assets/image/sokneang.webp'
import lita from '../../assets/image/lita.jpg';

import facebook from '../../assets/image/icons8-facebook-logo-48.png';
import telegram from '../../assets/image/icons8-telegram-48.png'
import linkedin from '../../assets/image/icons8-linkedin-48.png'
import phone from '../../assets/image/icons8-phone-48.png'
import email from '../../assets/image/icons8-email-40.png'


const allMember = [
    {
        id: 1,
        name: 'OUY PONLOUER ',
        phone_number: '(097)266-7448',
        description: 'I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.I am truly excited to have built the LatteCoding website.',
        email: 'ouyponlouer@email.com',
        fb_link: '',
        tel_link: '',
        li_link: '',
        pf_image: require('../../assets/image/Charlie.jpg'),
    },
]
export default function AppAboutComponent() {
    return (
        <section className="sec-1-about py-5">
            <h1 className=' text-center mb-5'>ABOUT US</h1>
            <Container className=' d-flex pt-5 '>
                <Row className=' d-flex justify-content-around  p-0 row-about-us ' >
                    {/* Sokneang */}
                    <Col xl={5} sm={12} md={12} >
                        <div className=' w-100' style={{ height: '400px' }}>
                            <Image className=' pf-image' src={sokneang} />
                        </div>
                    </Col>
                    <Col sm={12} xl={7} md={12} className=' ' >
                        <div className=' d-flex w-100'>
                            <div className='w-75'>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>LAY SOKNEAG</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2 d-block w-50 " style={{ height: '40' }} >
                                    <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                    <p className='mt-3'>(097)788-45714</p>
                                </div>
                                <div className=" d-flex gap-3 w-75  " style={{ height: '40' }} >
                                    <div><Image className='ps-1 d-block w-75' src={email} /></div>
                                    <p className=''>laysokneang80@gmail.com</p>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/1BQ8WkGPpv/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className='me-2' href="https://t.me/Neang_8888"><Image className='socail-link' src={telegram} /></a>
                                    <a className='me-2' href="https://www.linkedin.com/in/lay-sokneang-794706322?trk=contact-info"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Nh */}
                    <Col sm={12} xl={7} className=''>
                        <div className=' d-flex justify-content-end w-100'>
                            <div className=' w-75  '>
                                <div className=''>
                                    <p >Hello everyone! my name is </p>
                                    <h1 className='member-name'>OUY PONLOUER</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2  d-block w-50 " style={{ height: '40' }} >
                                    <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                    <p className=' mt-3'>(097)266-7448</p>
                                </div>
                                <div className=" d-flex gap-3 w-75" style={{ height: '40' }} >
                                    <div className=''><Image className='ps-1 d-block w-75 ' src={email} /></div>
                                    <p className=''>ouyponlouer@gmail.com</p>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/1EuSZxeH3q/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className=' me-2' href="https://t.me/@LONGSOKBOMNOG"><Image className='socail-link' src={telegram} /></a>
                                    <a className=' me-2' href="https://www.linkedin.com/in/long-sok-bomnong-717933349"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={5} className=' ' >

                        <div className='d-flex justify-content-end w-100' style={{ height: '400px' }}>
                            <Image className='pf-image ' src={me} />
                        </div>

                    </Col>
                    {/* Bomnong */}
                    <Col sm={12} xl={5} className='  ' >
                        <div className=' ' style={{ height: '400px', width: '' }}>
                            <Image className=' pf-image' src={bomnong} />
                        </div>
                    </Col>
                    <Col sm={12} xl={7} style={{ height: '400px' }}>
                        <div className=' d-flex w-100'>
                            <div className=' w-75  '>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>LONG SOKBOMNONG</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2  d-block w-75 " style={{ height: '40' }} >
                                    <div className=' '><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                    <p className=' mt-3'>(088)379-8108</p>
                                </div>
                                <div className=" d-flex gap-3 w-75 " style={{ height: '40' }} >
                                    <div className=''><Image className='ps-1 d-block w-75 ' src={email} /></div>
                                    <p className=''> long.sokbomnong.1222@rupp.edu.kh</p>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/1EuSZxeH3q/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className=' me-2' href="https://t.me/@LONGSOKBOMNOG"><Image className='socail-link' src={telegram} /></a>
                                    <a className=' me-2' href="https://www.linkedin.com/in/long-sok-bomnong-717933349"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* Nita */}
                    <Col sm={12} xl={7} style={{ height: '400px' }}>
                        <div className=' d-flex justify-content-end w-100'>
                            <div className=' w-75  '>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>OUK ALITA</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2  d-block w-50 " style={{ height: '40' }} >
                                    <div className='w-1 '><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                    <p className=' mt-3'>(097)266-7448</p>
                                </div>
                                <div className=" d-flex gap-3 w-75" style={{ height: '40' }} >
                                    <div className=''><Image className='ps-1 d-block w-75' src={email} /></div>
                                    <p className=''>ouk.alita.1222@rupp.edu.kh</p>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/18VasAgCy4/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className=' me-2' href="https://t.me/alitaouk0905"><Image className='socail-link' src={telegram} /></a>
                                    <a className=' me-2' href="https://linkedin.com/in/alita-ouk-b3b71234a"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={5} >
                        <div className=' d-flex justify-content-end w-100' style={{ height: '400px' }}>
                            <Image className='pf-image' src={lita} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
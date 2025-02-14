
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import me from '../../assets/image/me.PNG';
import bomnong from '../../assets/image/Bomnong.jpg';
import sokneang from '../../assets/image/sokneang.jpg';
import lita from '../../assets/image/lita.jpg';
import facebook from '../../assets/image/icons8-facebook-logo-48.png';
import telegram from '../../assets/image/icons8-telegram-48.png';
import linkedin from '../../assets/image/icons8-linkedin-48.png';
import phone from '../../assets/image/icons8-phone-48.png';
import email from '../../assets/image/icons8-email-40.png';


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
            <div className=' container d-flex justify-content-center pt-5 w-100 '>
                <div className='row column-gap-0 w-100 p-0 row-about-us ' >
                    {/* Sokneang */}
                    <div className='col-sm-12 col-md-5 col-lg-5 col-12' >
                        <div className='w-100 d-flex justify-content-center ' style={{ height: '400px' }}>
                            <Image className='w-100  pf-image' src={sokneang} />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7 col-lg-7 col-12 ' >
                        <div className=' d-flex justify-content-center w-100'>
                            <div className='w-100 ps-5'>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>LAY SOKNEAG</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=' w-100 '>
                                    <div className=" d-flex align-items-center gap-2 d-block w-100 " style={{ height: '40' }} >
                                        <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                        <p className='mt-3'>(097)788-45714</p>
                                    </div>
                                    <div className=" d-flex gap-3 w-100  " style={{ height: '40' }} >
                                        <div><Image className='ps-1 d-block w-75' src={email} /></div>
                                        <p className=''>laysokneang80@gmail.com</p>
                                    </div>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/1BQ8WkGPpv/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className='me-2' href="https://t.me/Neang_8888"><Image className='socail-link' src={telegram} /></a>
                                    <a className='me-2' href="https://www.linkedin.com/in/lay-sokneang-794706322?trk=contact-info"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                    {/* Nh */}
                    <div className='col-sm-12 col-md-5 col-lg-5 col-12' >
                        <div className='w-100 d-flex justify-content-center ' style={{ height: '400px' }}>
                            <Image className='w-100  pf-image' src={me} />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7 col-lg-7 col-12 ' >
                        <div className=' d-flex justify-content-center w-100'>
                            <div className='w-100 ps-5'>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>OUY PONLOUER</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=' w-100 '>
                                    <div className=" d-flex align-items-center gap-2 d-block w-100 " style={{ height: '40' }} >
                                        <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                        <p className='mt-3'>(097)266-7448</p>
                                    </div>
                                    <div className=" d-flex gap-3 w-100  " style={{ height: '40' }} >
                                        <div><Image className='ps-1 d-block w-75' src={email} /></div>
                                        <p className=''>ouyponlouer@gmail.com</p>
                                    </div>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/15w1832qTE/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className='me-2' href="https://t.me/Ponlouer"><Image className='socail-link' src={telegram} /></a>
                                    <a className='me-2' href="http://linkedin.com/in/ouy-ponlouer-a8a0b32b9"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bomnong */}
                    <div className='col-sm-12 col-md-5 col-lg-5 col-12 ' >
                        <div className='w-100 d-flex justify-content-center  ' style={{ height: '400px' }}>
                            <Image className='w-100  pf-image' src={bomnong } />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7 col-lg-7 col-12 ' >
                        <div className=' d-flex justify-content-center w-100'>
                            <div className='w-100 ps-5'>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>LONG SOKBOMNONG</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=' w-100'>
                                    <div className=" d-flex align-items-center gap-2 d-block w-100 " style={{ height: '40' }} >
                                        <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                        <p className='mt-3'>(088)379-8108</p>
                                    </div>
                                    <div className=" d-flex gap-3 w-100 " style={{ height: '40' }} >
                                        <div><Image className='ps-1 d-block w-75' src={email} /></div>
                                        <p className=''>long.sokbomnong.1222@rupp.edu.kh</p>
                                    </div>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/1EuSZxeH3q/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className='me-2' href="https://t.me/@LONGSOKBOMNOG"><Image className='socail-link' src={telegram} /></a>
                                    <a className='me-2' href="https://www.linkedin.com/in/long-sok-bomnong-717933349"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Nita */}
                    <div className='col-sm-12 col-md-5 col-lg-5 col-12' >
                        <div className='w-100 d-flex justify-content-center ' style={{ height: '400px' }}>
                            <Image className='w-100  pf-image' src={lita } />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7 col-lg-7 col-12 ' >
                        <div className=' d-flex justify-content-center w-100'>
                            <div className='w-100 ps-5'>
                                <div className=''>
                                    <p>Hello everyone! my name is </p>
                                    <h1 className='member-name'>OUK ALITA</h1>
                                    <p>I am studying department computer Science year three at Royal University of Phnom Penh. To create this website, I have completed studies in skills such as HTML, CSS, Bootstrap, JavaScript, and React.js.
                                        I am truly excited to have built the LatteCoding website.</p>
                                </div>

                                <div className=' w-100 '>
                                    <div className=" d-flex align-items-center gap-2 d-block w-100 " style={{ height: '40' }} >
                                        <div className=''><Image className='ps-0 d-block w-75 h-100' src={phone} /></div>
                                        <p className='mt-3'>(088)379-8108</p>
                                    </div>
                                    <div className=" d-flex gap-3 w-100  " style={{ height: '40' }} >
                                        <div><Image className='ps-1 d-block w-75' src={email} /></div>
                                        <p className=''>ouk.alita.1222@rupp.edu.kh</p>
                                    </div>
                                </div>


                                <div className=' w-100'>
                                    <a className=' me-2' href="https://www.facebook.com/share/18VasAgCy4/?mibextid=wwXIfr"><Image className='socail-link' src={facebook} /></a>
                                    <a className='me-2' href="ttps://t.me/alitaouk0905"><Image className='socail-link' src={telegram} /></a>
                                    <a className='me-2' href="https://linkedin.com/in/alita-ouk-b3b71234a"><Image className='socail-link' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
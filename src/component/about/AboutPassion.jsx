import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import me from '../../assets/image/me.jpg'
const ourPassion = [
    {
        id: '1',
        name: 'Possibili-Teas',
        image: require('../../assets/image/Possibili-Teas.webp'),
        description: 'Chatime offers endless possibili-teas. Create your perfect drink with our diverse range of teas and mix-ins.'
    },
    {
        id: '2',
        name: 'Quali-Tea',
        image: require('../../assets/image/Quali-Tea.webp'),
        description: 'We prioritise quality in every sip, using the finest ingredients to ensure an exceptional tea experienc'
    },
    {
        id: '3',
        name: 'Fresh Tea',
        image: require('../../assets/image/Fresh Tea.webp'),
        description: 'Freshness is key at Chatime. Our teas are brewed every 4 hours, guaranteeing vibrant flavors and aromas.'
    },
    {
        id: '4',
        name: 'Communi-Tea',
        image: require('../../assets/image/Communi-Tea.webp'),
        description: 'By being part of our communi-tea, you are contributing to positive societal change through our impactful partnerships.'
    },

]
export default function AppAboutPassion() {
    return (
        <section className='sec-about-passion mb-5'>
            <Container>
                <div className=' my-5'>
                    <h2 className=' my-3 text-center'>WHY LATTECODING</h2>
                    <p className=' pb-5 text-center fs-4'>Our passion for creativity shines bright and we're excited to pass on that spark to you!</p>

                </div>
                <Row >
                    {
                        ourPassion.map(data => {
                            return (
                                <Col sm={12} md={6} lg={3}>
                                    <div className=' '>
                                        <div className='text-center'>
                                            <Image className=' w-50' src={data.image}></Image>
                                        </div>
                                        <div>
                                            <p className=' text-center'>{data.name}</p>
                                            <p className=' text-center'>{data.description}</p>

                                        </div>

                                    </div>
                                </Col>
                            )
                        })
                    }
                    {/* <Col xl={3}>
                        <div className=' border '>
                            <div className='text-center'>
                                <Image className=' w-50' src={me}></Image>
                            </div>
                            <div>
                                <p className=' text-center'>Possibili-Teas</p>
                                <p className=' text-center'>Chatime offers endless possibili-teas. Create your perfect drink with our diverse range of teas and mix-ins.</p>

                            </div>

                        </div>
                    </Col> */}
                </Row>
            </Container>

        </section>

    )
}
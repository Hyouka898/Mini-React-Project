import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
var heroData = [
    {
        id: 1,
        image: require('../../assets/image/banner_enhanced.jpg'),
       
        title: 'title1',
    },
    {
        id: 2,
        image: require('../../assets/image/banner_enhanced.jpg'),
        title: 'title2',

    },
    {
        id: 1,
        image: require('../../assets/image/banner_enhanced.jpg'),
        title: 'title3',

    }
]


export default function AppHeroBanner() {
    return (
        <section className=''>
            <Carousel data-bs-theme="light" className='banner fs-3'>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id} className=' text-light'>
                                
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"Slide"+hero.id}
                                />
                                <Carousel.Caption >
                                    {/* <h5>First slide label</h5> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
               
            </Carousel>
        </section>
    )
}
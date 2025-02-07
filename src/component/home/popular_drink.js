import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DrinkImage from 'react-bootstrap/Image';
var DrinkData = [
    {
        id: 1,
        image: require('../../assets/image/drink8.png'),
        title: 'Ice Coffee'
    },
    {
        id: 2,
        image: require('../../assets/image/drink2.png'),
        title: 'Iced Cappuccino_Lum Hery'
    },
    {
        id: 3,
        image: require('../../assets/image/drink7.png'),
        title: 'Iced Chocoolate'
    },
    {
        id: 4,
        image: require('../../assets/image/drink3.png'),
        title: 'Passion Cream'
    },
    {
        id: 5,
        image: require('../../assets/image/drink5.png'),
        title: 'Chocolate Cream Coconut'
    },
    {
        id: 6,
        image: require('../../assets/image/drink6.png'),
        title: 'Green Milk Tea'
    },
    {
        id: 7,
        image: require('../../assets/image/drink4.png'),
        title: 'Lychee Tea'
    },
    {
        id: 8,
        image: require('../../assets/image/drink8.png'),
        title: 'Ice Thonl Coffee'
    }

]
export default function AppPopularDrink() {
    return (
        <section className='sec-3-drink mt-5'>
            <Container>
                <Row>
                    {
                        DrinkData.map(drink => {
                            return (
                                <Col xl={3} className=''>
                                    <a className=" d-block" href='#'>
                                        <div className='drink-card' >
                                            <DrinkImage className='drink-img w-100' src={drink.image} />
                                        </div>
                                    </a>
                                    <p className=' fs-6 text-center '>{drink.title}</p>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}
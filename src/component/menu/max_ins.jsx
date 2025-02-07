import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AllMaxIns = [
    {
        id: '1',
        image: require('../../assets/image/max-ins-boba.webp'),
        tittle: 'Boba'
    },
    {
        id: '2',
        image: require('../../assets/image/max-ins-Cookie-Crumb.webp'),
        tittle: 'Cookie Crumb'
    },
    {
        id: '3',
        image: require('../../assets/image/max-ins-Jellies.webp'),
        tittle: 'Jellies'
    },
    {
        id: '4',
        image: require('../../assets/image/max-ins-Mousse.png'),
        tittle: 'Mousse'
    },
    {
        id: '5',
        image: require('../../assets/image/max-ins-Popping-Pearls.webp'),
        tittle: 'Popping Pearls'
    },
    {
        id: '6',
        image: require('../../assets/image/max-ins-Herbal-Jelly.webp'),
        tittle: 'Jelly'
    },
    {
        id: '7',
        image: require('../../assets/image/max-ins-aloe-vera.jpeg'),
        tittle: 'Aloe Vera'
    },
    {
        id: '8',
        image: require('../../assets/image/max-ins-pudding.webp'),
        tittle: 'Pudding'
    }
]

export default function AppMaxIns() {
    return (
        <section className="sec-latte-max-ins ">
            <h1 className=" text-center text-light pt-5">Max-Ins</h1>
            {/* <Container> */}
            <Row className="py-5 flex-lg-nowrap overflow-x-scroll w-100 h-100">
                {
                    AllMaxIns.map((items) => {
                        return (
                            <Col xl={3} >
                                <div className=" d-flex align-items-center justify-content-center">
                                    <div className=" ">
                                        <a className=" items  max-ins-link   " href="#">
                                            <img className=" max-ins-image w-100 h-100 object-fit-cover" src={items.image} alt="" />
                                        </a>
                                        <p className="  text-center text-light mt-2">{items.tittle}</p>
                                    </div>

                                </div>
                            </Col>
                            // <Col   className=" d-flex justify-content-center border border-danger" >
                            //     <div className=" border border-light">
                            //         <a className=" items  max-ins-link  border-light   " href="#">
                            //             <img className=" max-ins-image w-100 h-100 object-fit-cover" src={items.image} alt="" />
                            //         </a>
                            //         <p className="  text-center text-light mt-2">{items.tittle}</p>
                            //     </div>
                            // </Col>
                        )
                    })
                }
            </Row>
        </section>
    )
}
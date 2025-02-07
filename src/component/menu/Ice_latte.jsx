import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import img1 from "../../assets/image/drink8.png";
import { useState } from 'react';


export default function AppMenu() {
    const [price, setPrice] = useState(1.5);
    const [num, setNum] = useState(1);
    const handleIncreased = () => {
        if (num <= 1) {
            setNum(1);
        } else {
            setNum(num - 1);
            setPrice(price - 1.5)
        }
    }
    const handleDecreased = () => {
        setNum(num + 1);
        setPrice(price + 1.5)
    }

    return (
        <section className="sec-ice-latte">
            <Container>
                <Row >
                    <Col xl={6}>
                        <div className=' text-light pe-5 mt-5'>
                            <p>MENU / ICE LATTE</p>
                            <h1 className='drink-titles fw-bold'>ICE LATTE</h1>
                            <p>THE PERFECT PICK ME UP</p>
                            <p>Fresh brews and full of the flavor, our Ice coffe get you energisize and ready to go</p>

                        </div>
                        <div className='text-light d-flex gap-3 align-items-center'>
                            <label>
                                Size
                            </label>
                            <Form.Select className='select-size' aria-label="Default select example">
                                {/* <option>Open this select menu</option> */}
                                <option className='select-item' value="1">100ml</option>
                                <option className='' value="2">30ml</option>
                                <option className='' value="3">60ml</option>
                            </Form.Select>

                        </div>
                        <div className='mt-4 d-flex align-items-center  gap-5' style={{ height: '40px' }}>
                            <div> <h4 className='price-drink text-light 'style={{ width: '150px' }}>Price : ${price} </h4> </div>

                            <div className='d-flex  align-items-center gap-3 fw-bold  h-100' style={{ width: '100px ' }}>
                                <p className='btn-sub fs-3  ' onClick={handleIncreased}>-</p>
                                <p className='mt-2 fs-5 price-drink text-light'>{num}</p>
                                <p className='btn-sum  py-0 fs-3 ' onClick={handleDecreased}>+</p>
                            </div>

                        </div>
                        <div className=' mt-2 d-flex align-items-center gap-5 '>

                            <button className=' btn btn-buy px-5 ' style={{ width: '250px', height: '40px' }}>Buy</button>
                            <div>
                                <button className='btn-basket' >
                                    {/* <i class="bi bi-cart4 fs-1"></i> */}
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Image className=' w-100 h-100' src={img1} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
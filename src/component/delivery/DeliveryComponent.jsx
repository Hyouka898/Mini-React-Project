import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
export function AppDeliveryComponent() {
    return (
        <main>
            <section className="sec-1-delivery " >
                <div className=' container w-100 d-flex align-items-center justify-content-center  h-100  '>
                    <div className='  '>
                        <div className=' w-100'>
                            <h1 className='text-center text-light fw-medium mb-4 delivery-title '>LET US COME TO YOU</h1>
                            <h5 className=' text-center  text-secondary mb-4 delivery-input-title'>Enter your location to find who delivers LATTECODING in your area</h5>
                            <div className=''>
                                <div className=' text-center w-100 d-flex justify-content-center align-items-center gap-3'>
                                    <form className=' text-center  w-50 '>
                                        <div class=" fs-6 text-center   ">
                                            <Form.Group className="text-center w-100 " controlId="formGroupEmail">
                                                <Form.Control className=' py-2 px-4 input-address  ' type="search" placeholder="Enter Address to search" />
                                            </Form.Group>
                                        </div>
                                    </form>
                                    <div>
                                        <button className='btn btn-search py-1 px-3 '>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </section>
            <section class='sec-2-delivery my-5 fw-medium'>
                <Container>
                    <p className=' text-center'>Prices may be different than in store. Product offers, discounts and promotions may not be available.</p>
                    <div className='mb-4'>
                        <h3 className='mb-4 fw-bold'>FREQUENTLY ASKED QUESTIONS</h3>
                        <h6 className='  fw-bold'>DOES DUNKIN' DELIVERY EXIST?</h6>
                        <p className=''>You asked, we answered. Dunkin' has teamed up with Grubhub®,  Uber Eats® and DoorDash® to bring you coffee, donuts, bagels and sandwiches to your door.</p>

                    </div>
                    <div className=' mb-4'>
                        <h6 className=' fw-bold'>HOW DO I FIND OUT IF MY LOCAL DUNKIN' RESTAURANT IS PARTICIPATING IN DELIVERY?</h6>
                        <p>To determine which Dunkin' locations in your area are participating in delivery, simply download the Grubhub, Uber Eats or DoorDash App or go to Grubhub.com, UberEats.com or DoorDash.com input your delivery address, and you will see a list of participating Dunkin' stores in your area.</p>
                    </div>
                    <div className=' mb-4'>
                        <h6 className=' fw-bold'>CAN I STILL GET MY DUNKIN' FAVORITES WITH DELIVERY?</h6>
                        <p>Yes, most of your Dunkin' favorites are available for delivery.</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className=' fw-bold'>HOW DO I REPORT A PROBLEM WITH MY DUNKIN' DELIVERY ORDER?</h6>
                        <p>It's easy, just contact Grubhub customer service  ,Uber Eats customer service or DoorDash customer service directly on their respective websites or apps.</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className=' fw-bold'>OK, SO DUNKIN' DELIVERS. WHY SHOULD I TRY DELIVERY?</h6>
                        <p>Dunkin' Delivery is a game changer. Now you can get all of your favorites, like cold brew, donuts, breakfast sandwiches and more right to your door. Need we say more'?</p>
                    </div>
                    <div className='mb-4'>
                        <h6 className=' fw-bold'>ARE THERE ANY FEES ON DELIVERY?</h6>
                        <p>All fees are shown before checking out on the Grubhub, Uber Eats or DoorDash App or Grubhub.com, UberEats.com or DoorDash.com</p>
                    </div>
                    <div className='mb-4 fw-blod'><h6>CAN I EARN DUNKIN' REWARDS POINTS ON DELIVERY, OR TURN MY DUNKIN' REWARDS POINTS INTO REWARDS FOR FREE FOOD AND DRINKS VIA DELIVERY?</h6>
                        <p>No, not at this time.</p></div>
                </Container>
            </section>
        </main>
    )
}
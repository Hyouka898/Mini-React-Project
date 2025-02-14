
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
export default function AppQuestionCmm() {
    return (
        <section class="sec-1-contact ">
            <div className='overlay d-flex align-items-center'>
                <div className=' container'>
                    <div className="row w-100">
                        <div className='col-sm-0 col-md-5 col-xl-7 '></div>
                        <div className='col-sm-12 col-md-7 col-xl-5 '>
                            <div  className=' d-flex justify-content-center w-100'>
                            <div className="title-form w-100 h-100 ">
                                <h2 className='text-light'>Do you have any questions??</h2>
                                <p className="fs-6 text-light">You can contact our Latte Coding team by filling out the information below. </p>
                                <form className=' h-100'>
                                    <div className='row  '>
                                        <div className='col-6 '>

                                            <div className='col-sm-12  w-100'>
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="FirtName"
                                                    className="mb-3 "
                                                >
                                                    <Form.Control className=' text-light' type="text" placeholder="name@example.com" />
                                                </FloatingLabel>
                                            </div>

                                        </div>
                                        <div className='col-6 '>
                                            <div className=' w-100'>
                                                <FloatingLabel controlId="floatingPassword" label="Lastname">
                                                    <Form.Control type="text" placeholder="Password" />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className=' w-100'>
                                                <FloatingLabel controlId="floatingPassword" label="Email">
                                                    <Form.Control type="email" placeholder="Password" />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                        <div className='col-6  mb-3'>
                                            <div className=' w-100'>
                                                <FloatingLabel controlId="floatingPassword" label="Password">
                                                    <Form.Control type="password" placeholder="Password" />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className=' w-100'>
                                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Leave a comment here"
                                                        style={{ height: '100px' }}
                                                    />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <button className="btn btn-submit px-3" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
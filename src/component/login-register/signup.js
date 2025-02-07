import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import img1 from '../../assets/image/icons8-facebook-logo-48.png';
import img2 from '../../assets/image/icons8-google-48.png';
import img3 from '../../assets/image/icons8-linkedin-48.png';
export default function AppSignup(props) {
    return (
        <div class="banner-login">
            <div class="overlay">
                <div class="d-flex justify-content-center align-items-center h-100 w-100 ">
                    <form class="login-form rounded-3 p-4" action="">
                        <p class="fs-3 fw-medium mt-2 text-center text-dark fw-bold login-title">SIGNUP</p>
                        <div class="mb-3 fs-6">
                            {/* <input type="email" class="form-control fs-5" id="exampleFormControlInput1" placeholder="Email"/> */}
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                        </div>
                        <div class="mb-3 fs-5">
                            {/* <input type="email" class="form-control fs-5" id="exampleFormControlInput1" placeholder="Email"/> */}
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="Password" placeholder="Password" />
                            </Form.Group>
                        </div>
                        <div class="mb-3 fs-5">
                            {/* <input type="email" class="form-control fs-5" id="exampleFormControlInput1" placeholder="Email"/> */}
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="Password" placeholder="Comfirm Password" />
                            </Form.Group>
                        </div>
                        <Link to ='/login'className=' text-decoration-none'><input type="submit" class="form-control btn-signup fs-6 text-light mt-3" value="Signup" /></Link>
                        {/* <div class="text-center"> <a class="text-decoration-none fs-5 text-center " href="#">Forget password ? </a></div> */}
                       
                        <div class="d-flex mt-3 w-100 justify-content-center fs-6">
                            <p>Don't have an account ?</p>
                            <Link to='/login' className=' text-decoration-none'><a class="text-decoration-none ms-2" href="#">Login</a></Link>
                        </div>
                        <hr />
                        <div className=' text-center gap-3 '>
                            <a className =' mx-1'href='#'><Image className='socail-link' src={img1} /></a>
                            <a className ='mx-1' href='#'><Image className='socail-link' src={img2} /></a>
                            <a className ='mx-1'href='#'><Image className='socail-link' src={img3} /></a>
                        </div>
                        {/* <input type="submit" class="form-control btn-login-fb fs-6  text-light" value="Login with Facebook" />
                        <input type="submit" class="form-control mt-2 btn-login-gg fs-6 text-dark    " value="Login with Google" />
                        */}
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    )
}
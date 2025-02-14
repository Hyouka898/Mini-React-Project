import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import logo from '../../assets/image/nav-brand.png';
export default function AppHeader(props) {
  return (
    <Navbar expand="lg" className="navbar position-sticky top-0 ">
      <Container className=" d-flex justify-content-between ">
        {/* <Navbar.Brand href="#home" className=' fs-5 text-light'>LatteCoding</Navbar.Brand> */}
        {/* <Navbar.Brand><Link to='/' className=' fs-5 text-light text-decoration-none fw-bold'>LATTECODING</Link></Navbar.Brand> */}
        <Navbar.Brand><Link to='/' className=' fs-5 text-light text-decoration-none fw-bold'>
            {/* <Image className=' border border-danger' style={{height:'90px'}} src={logo}/> */}
            LATTECODING
        </Link></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="">
          <Nav className="m-auto fs-5 menu">
          <Dropdown>
              <Dropdown.Toggle variant="" className='fs-5 text-light text-decoration-none' id="dropdown-basic">
                MENU
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to='/ice_latte' className=' text-decoration-none'><Dropdown.Item href="#/action-1">Ice Latte</Dropdown.Item></Link>
                <Link to='/ice_latte' className=' text-decoration-none'><Dropdown.Item href="#/action-2">Green Tea</Dropdown.Item></Link>
                <Link to='/ice_latte' className=' text-decoration-none'><Dropdown.Item href="#/action-3">Hot Chocolate</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav.Link><Link to='/menu' className=' fs-5 text-light text-decoration-none'>MENU</Link></Nav.Link> */}
            <Nav.Link><Link to='/delivery' className=' fs-5 text-light text-decoration-none'>DELIVERY</Link></Nav.Link>
            <Nav.Link><Link to='/contact' className=' fs-5 text-light text-decoration-none'>CONTACT</Link></Nav.Link>
            <Nav.Link><Link to='/about' className=' fs-5 text-light text-decoration-none'>ABOUT US</Link></Nav.Link>
            <Nav.Link><Link to='/login' className=' fs-5 text-light text-decoration-none'>LOGIN</Link></Nav.Link>
            <Nav.Link><Link to='/signup' className=' fs-5 text-light text-decoration-none'>REGISTER</Link></Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#buy"><i class="bi bi-cart4 fs-3 text-light"></i></Nav.Link>
            <Nav.Link href="#notification"><i class="bi bi-bell fs-3 text-light "></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {props.children}
      </Container>
    </Navbar>
  )
}
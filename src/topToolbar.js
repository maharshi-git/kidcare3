import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import VaccLogo from './resources/Vax365.png';
import { useLocation } from "react-router-dom";



const TopNavbar = () => {

  // let navigate = useNavigate();
  let location = useLocation();

  // if(location.pathname === '/Login'){
  //   return null
  // }
  return (
    <Navbar bg="light" variant="light" style={{"padding": "0rem"}} className="justify-content-between">
      <Navbar.Brand href="#">
        <img src={VaccLogo} style={{"width": "5rem", "padding": "0rem"}} alt=""></img>
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="https://www.mayirpsciences.com/" target="_blank">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
      <Nav>
        {(location.pathname !== '/Login') && <Button variant="primary" href="./Login" style={{"width": "6rem"}} className='btn btn-success smallMargin appButtonPurple'>Sign In</Button>}
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;

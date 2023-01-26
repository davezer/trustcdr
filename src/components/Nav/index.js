import React, { useState } from "react";
import logo from '../../assets/trustCDRLogo.jpg';
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ModalPop from '../Modal';

function Navigation (props) {
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  return (
    <>
      <Navbar className="navbar" sticky="top" id="navbar" bg="" expand="md">
        <Container className="brand-con">
          <Navbar.Brand className ="brand" href="/" ><em><img src={logo} className="cdr-logo" alt="logo" /></em></Navbar.Brand>
        </Container>
        <Container className="nav-links-con">  
          <Nav className="nav-links">
            <ul className="nav-item" >
            {pages.map(Page => (
              <li
                className={`mx-5 ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
                >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {(Page.name)}
                </span>
              </li>
              
              ))}
            </ul>
          </Nav>
          <Nav className='ml-auto quote'>
            <button onClick={() => this.setState({showModal: true})}>Get A Quote!</button>
          </Nav>
          <ModalPop />
        </Container>
      </Navbar>
      
    </>  
      
    
  );
}


export default Navigation;
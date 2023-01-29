import React from "react";
import logo from '../../assets/trustCDRLogo.jpg';
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation (props) {

  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  return (
    <>
      <Container className="top-bar-con">
        <div className="top-bar">
          <div className="top-bar-left">
            <span className="top-bar-left-text">Certify<FontAwesomeIcon icon="fa-regular fa-slash-forward" />Destroy<FontAwesomeIcon icon="fa-regular fa-slash-forward" />Recycle</span>
          </div>
          <div className="top-bar-right">
            <div>
              <span className="top-bar-right-text">Call Us: 1-800-555-5555</span>
            </div>
            <div> 
              <span className="top-bar-right-text">sales@trustcdr.com</span>
            </div>
            <div>
              <span className="top-bar-right-text">Request A Quote!</span>
            </div>
          </div>
        </div>
      </Container>
      <Navbar className="navbar" sticky="top" id="navbar" bg="" expand="md">
        <Container className="brand-con">
          <Navbar.Brand className ="brand" href="/" ><em><img src={logo} className="cdr-logo" alt="logo" /></em></Navbar.Brand>
        </Container>
        <Container className="nav-links-con">  
          <Nav className="nav-link">
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
          
         
        </Container>
      </Navbar>
      
    </>  
      
    
  );
}


export default Navigation;
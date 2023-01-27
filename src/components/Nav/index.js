import React from "react";
import logo from '../../assets/trustCDRLogo.jpg';
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation (props) {

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
          
         
        </Container>
      </Navbar>
      
    </>  
      
    
  );
}


export default Navigation;
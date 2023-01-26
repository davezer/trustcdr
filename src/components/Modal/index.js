import React, { useState } from 'react';
import { Navbar, Container, Nav, Modal, Tab } from 'react-bootstrap';

function ModalPop(props) {
    const [showModal, setShowModal] = useState(false);

    return(
        <>  
        <Modal
        {...props}
        size='lg'
        color='#262626'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        centered>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="modal-title" id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  
                </Nav.Item>
                <Nav.Item>
                  
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Tab.Content>
              
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>  

    )
}
<div className="hero-form">
        <h3>Get Started Today</h3>
        <p>Fill out this form to get a quote!</p>
        <form>
          <label for="name">Enter full name:</label>
          <input type="text" placeholder="Your Name" id="name" name="name" class="form-input" />
          <label for="email">Enter email address:</label>
          <input type="email" placeholder="Email Address" id="email" name="email" class="form-input" />
          <label for="phone">Enter a telephone number:</label>
          <input type="tel" placeholder="Phone Number" name="phone" id="phone" class="form-input" />
            <p>
                What type of shredding do you need? <br></br>
                <span className="radio-wrapper">
                  <input type="radio" name="one-time-shred" id="one-time-shred" />
                  <label for="one-time">One Time Shred</label>
                </span> <br/>
                <span className="radio-wrapper">
                  <input type="radio" name="new-service-setup" id="new-service-setup" />
                  <label for="new-service">Set Up New Service</label>
                </span> <br></br>
                <span className="radio-wrapper">
                  <input type="radio" name="need-new-vendor" id="need-new-vendor" />
                  <label for="new-vendor">Need New Vendor</label>
                </span>
            </p>
          <button type="submit">
            Get quote!
          </button>
        </form>
      </div>

export default ModalPop;
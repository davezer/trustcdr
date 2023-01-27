import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return(
        <>
        <Container id="about" className="about">
            <Container className='row upper-container'> 
                <div className="image-container">
                    <h1 className="intro-name">CDR</h1>
                </div>
                <div className='text-slider-div'>
                    <span className="intro-text-slider">
                        
                    </span>
                </div>
            </Container>
            <Container>
                <div className="inner-container">
                    <div className="row">
                        <div className="about-description ">
                            <p>
                                Certify. Destroy. Recycle. CDR.
                            </p>
                        
                        </div>
                         
                    </div>
                    <div className="about-contact">
                    </div>
                </div>
            </Container>    
        </Container>
        </>
    );
}



export default About;
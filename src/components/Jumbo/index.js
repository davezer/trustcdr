import React from 'react';

import { Container } from 'react-bootstrap';

function Jumbo () {
    return (
        <>
        <Container className="hero">
            <div className="hero-cta">
                <h2>Start Shredding today with CDR</h2>
                {/* <p>
                seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it
                messenger bag Wes Anderson Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund
                Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights retro cliche
                tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters cray gentrify tofu Marfa you
                probably haven't heard of them yr banh mi asymmetrical art party selvage letterpress High Life.
                </p> */}
            </div>

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
    </Container>
        </>

    )
}

export default Jumbo;
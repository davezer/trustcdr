import React from 'react';

function Footer() {

  return (
    <footer>
      <div className="social-container">
        <ul className="social-icons">
          <li className='list-item'><a href="https://daveoliverio.dev" target="_blank" rel="noreferrer"><i class="fa-sharp fa-solid fa-code">Dave</i></a></li>
        </ul>
        <h4>©2023 CDR</h4><br/>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
    </footer>
  );
};

export default Footer;
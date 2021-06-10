import React from 'react';

const Welcome = () => {
    return(
        <>
        <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>We provide the best <strong>consultancy</strong><br />to grow up your <strong>projects</strong></h1>
                <p>In today’s world, almost all the companies need software to run their 
                  business in a competitive market. Implementing a robust, sustainable 
                  and reliable a solution for a business requires wide variety of 
                  experience and excessive qualifications. AcaiSoft's goal is to 
                  meet these requirements for companies of all sizes in the UK at an affordable price. </p>
                <a href="#about" className="main-button-slider">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Welcome;
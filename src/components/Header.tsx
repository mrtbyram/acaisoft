import React from 'react';

const Header = () => {
    return (
        <>
        <header className="header-area header-sticky">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                    {/* ***** Logo Start ***** */}
                    <a href="#welcome" className="logo">
                        <img src="assets/images/logo-small.png" alt="AcaiSoft"/>
                    </a>
                    {/* ***** Logo End ***** */}
                    {/* ***** Menu Start ***** */}
                    <ul className="nav">
                    <li><a href="#welcome" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#toolbox">Toolbox</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                    {/* ***** Menu End ***** */}
                </nav>
                </div>
            </div>
            </div>
        </header>
        </>
    )
}

export default Header
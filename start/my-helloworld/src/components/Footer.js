import React from 'react';
import '../css/Footer.css';
import logo from '../img/logo-mk.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__links">
                    <a href="https://www.linkedin.com/in/martin-klestil/" target="_blank" rel="noreferrer" className="fa fa-linkedin">Linkedin</a>
                    <a href="https://www.instagram.com/mklestil/" target="_blank" rel="noreferrer" className="fa fa-instagram">Instagram</a>
                    <a href="https://twitter.com/mklestil" target="_blank" rel="noreferrer" className="fa fa-twitter">Twitter</a>
            </div>
            <div className="footer__logo-box">
                <img src={logo} alt="Logo" className="footer__LogoImg"/>
            </div>
            <div className="footer__copyright">
                <hr></hr>
                © 2021 Martin Klestil
                <hr></hr>
            </div>
        </div>      
    )
}
export default Footer
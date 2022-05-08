import React from "react";
import * as Util from '../Utils/Constants';
import '../Styles/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <div className="footer-main-container">
                <div className="footer-sub-container">
                    <Link to={'/'}><h1>{Util.OKINAWA}</h1></Link>
                </div>
                <div className="footer-sub-container">
                    <ul>Service</ul>
                    <ul>
                        <Link to={'/about'}><li>About Us</li></Link>
                        <Link to={'/contact'}><li>Contact Us</li></Link>
                        <Link to={'/solutions'}><li>Features</li></Link>
                        <Link to={'/faq'}><li>FAQs</li></Link>
                    </ul>
                </div>
                <div className="footer-sub-container">
                    <ul>Contacts</ul>
                    <ul>
                        <li>+91 7007475550</li>
                        <li>abdul.samadkirmani.samad63@gmail.com</li>
                        <li>@okinawasolutions</li>
                        <li>Okinawa Solutions</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
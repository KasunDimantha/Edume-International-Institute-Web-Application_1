import React from "react";
import './Component.css'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pay from './img/pay.png';

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className="contact">
                <h5>Do you Need Any help?</h5>
                <p>Contact us through </p>
                <p>(+94) 77 488 0013</p>
            </div>
            <div className="info">
                <h5>Information</h5>
                <p>Carriers</p>
                <p>Payment</p>
                <p>Rate us</p>
            </div>

            <div className="follow">
                <h4>Get In Touch</h4>
                <div className="icon">
                    <p><FaWhatsappSquare /></p>
                    <p><FaFacebook /></p>
                    <p><FaTwitterSquare /></p>
                    <p><FaLinkedin /></p>
                    <p><FaYoutube /></p>
                </div>
            </div>
            <div className="pay">
                <h4>Pay Via</h4>
                <img src={pay} alt="payment" className="payment" />
            </div>
        </div>
        <div className="footerName">
            <p>@Edume International Institute</p>
        </div>
            
        </>
    )
}
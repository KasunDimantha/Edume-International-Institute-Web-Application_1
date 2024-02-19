import React from "react";
import './Component.css'
import heroimg from './img/photo01.avif'


export default function Hero_section() {
    return (
        <>
            <section className="hero">
                <img src={heroimg} alt="heroimg" className="heroImg"/>

                <div>
                    <ul id="navbar">
                        <li><a>Home</a></li>
                        <li><a>Programs</a></li>
                        <li><a>Support</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>My Courses</a></li>
                        <li><a>Student Manuals</a></li>
                    </ul>
                </div>

            </section>
        </>
    )
}
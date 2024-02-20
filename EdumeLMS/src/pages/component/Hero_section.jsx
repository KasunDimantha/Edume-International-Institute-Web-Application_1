import React from "react";
import './Component.css'
import heroimg from './img/photo01.avif'


export default function Hero_section() {
    return (
        <>
            <section className="hero">
                <img src={heroimg} alt="heroimg" className="heroImg"/>

                <div className="hero_con">
                    <h2>Where your carrier <br />future begin !!!</h2>
                    <button>Explor More !</button>
                </div>

            </section>
        </>
    )
}
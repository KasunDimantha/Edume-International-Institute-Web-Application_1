import React from "react";
import './Component.css'
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <>
            <div className="header">
                <div className="header_name">
                    <Link to="/"><h3>Edume International Institute</h3></Link>
                </div>
                <div className="search_bar">
                    
                    <input type="text" placeholder="search here.." />
                    <button><FaSearch/></button>
                </div>
                <div className="header_account">
                    <div className="profile">
                        <a><VscAccount/></a>
                    </div>
                    <div className="account_function">
                        <ul>
                            <Link to="/signInPage" className="a1">Login</Link>
                            <a className="a2"> | </a>
                            <Link to="/signUpPage" className="a3">SignUp</Link>
                        </ul>
                    </div>
                </div>
            </div>
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
        </>
    )
}
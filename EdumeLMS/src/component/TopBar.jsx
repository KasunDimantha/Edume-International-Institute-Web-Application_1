import React from "react";
import './Component.css'
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

export default function TopBar() {
    return (
        <>
            <div className="header">
                <div className="header_name">
                    <h3>Edume International Institute</h3>
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
                            <a className="a1">Login</a>
                            <a className="a2"> | </a>
                            <a className="a3">SignUp</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
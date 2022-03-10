import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


export const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="navbar_item">
                <Link className="navbar_link" to="/">Home</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/exercises">Tutorials</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/audios">MoAudios</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/journal">Journal</Link>
            </li>
            <li className="navbar__item ">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("gymMo_user")
                        }

                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )

}
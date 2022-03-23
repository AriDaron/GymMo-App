import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


export const Navbar = () => {
    return (
        <ul className="navbar">
            <ul className="navbar_item">
                <Link className="dropbtn" to="/">Home</Link>
            </ul>
            <ul className="navbar_item">
                <Link className="dropbtn" to="/exercises">Tutorials</Link>
            </ul>
            <ul className="navbar_item">
                <Link className="dropbtn" to="/audios">MoAudios</Link>
            </ul>
            
            <ul className="navbar_item">
                <div className="dropdown" >
                    <button className="dropbtn">Journal</button>
                    <div className="dropdown-content">
                        <Link className="Jnavbar_link" to="/journal">Reflection Journal</Link>
                        <Link className="Jnavbar_link" to="/meals">Meal Journal</Link>
                        <Link className="Jnavbar_link" to="/workouts">Workout Journal </Link>
                    </div>
                </div>            </ul>
            <ul className="navbar_item ">
                <Link className="dropbtn" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("gymMo_user")
                        }

                    }>
                    Logout
                </Link>
            </ul>
        </ul>
    )

}
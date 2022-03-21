import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const JournalNavbar = () => {
    return (
        <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <Link className="Jnavbar_link" to="/meals">Meal Journal</Link>
  <Link className="Jnavbar_link" to="/workouts">Workout Journal </Link>
  </div>
</div>
        
    )
}


{/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}

{/* <ul className="Jnavbar">
            <li className="Jnavbar_item">
                <Link className="Jnavbar_link" to="/meals">Meal Journal</Link>
            </li>
            <li className="navbar_item">
                <Link className="Jnavbar_link" to="/workouts">Workout Journal </Link>
            </li>
        </ul> */}
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


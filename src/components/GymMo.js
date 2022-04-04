import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Navbar } from "./navbar/Navbar";
import { Link } from "react-router-dom";
import "./GymMo.css"
import logo from "../test2.png"

export const GymMo = () => {
    return <>
        <Route
            render={() => {
                if (localStorage.getItem("gymMo_user")) {
                    return (
                        <>

                            <h2 className="header">
                                <div className="logo">
                                    <img src={logo} alt=""></img>
                                </div>
                                <div className="nav">
                                    <Navbar />
                                </div>
                            </h2>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
};


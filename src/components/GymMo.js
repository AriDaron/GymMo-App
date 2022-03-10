import React from "react"
import { Route,Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Navbar } from "./navbar/Navbar";



export const GymMo = () => {
    return <>
        <Route
            render={() => {
                if (localStorage.getItem("gymMo_user")) {
                    return (
                        <>
                        <h2>The GymMo App</h2>
                        <Navbar />
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


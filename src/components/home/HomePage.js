import React from "react"
import "./HomePage.css"

export const HomePage = () => {
    return (

        <div>
            <section className="homepage">
            </section>
            <section>
                <section className="space">
        When Life gives you pain,  GO TO THE GYM
                </section>

                <p className="homepageOverview"> 
                    With this app users will have access to a catalog of
                    video workout tutorials that demonstrate how to use gym
                    equipment to target specific muscle groups. Users will also
                    have access to a library of motivational audio recording that
                    they can listen to at any time. 
                </p>
            </section>
            <section className="bottomOfHomepage">
                <div className="tutorialTag">
                    <h2 className="title">Tutorials</h2>
                    Step-by-step fitness tutorials
                </div>
                <div className="audioTag">
                    <h2 className="title"> Stay Motivated </h2>

                    We're here to give you the extra push you need to help keep you motivated to achieve your fitness goals.
                </div>
                <div className="trackingTag">
                    
                    <h2 className="title"> Learn. Track. Improve.</h2>

                    Keeping a diary helps you understand your habits and increases your likelihood of hitting your goals.
                </div>
            </section>
        </div>


    )
}
import React from "react"
import "./HomePage.css"


export const HomePage = () => {
    return (

        <div>
            <section className="homepage">
                <h1 className="homepageLogo">GYmMo</h1>
            </section>
            <section>
                <p className="homepageOverview">Sample OVERVIEW
                    With this app users will have access to a catalog of
                    video workout tutorials that demonstrate how to use gym
                    equipment to target specific muscle groups. Users will also
                    have access to a library of motivational audio recording that
                    they can listen to at any time. Hitting the gym is only ⅓ of
                    the work, Your mental growth plays a role in your physical growth
                    as well. Users will also have a space to keep journal entries about
                    their mood, body aches and how they’ve been feeling about their
                    fitness journey.

                </p>
            </section>
            <section className="bottomOfHomepage">
                <div className="tutorialTag">
                    <h2 className="title">Tutorials</h2>
                    If you don’t know what to do in the gym or you’ve never stepped foot in one before, it can seem like a pretty scary place. What are all the machines for? How do I do use them? Is everyone looking at me?
                    That’s why we’ve put together the ultimate gym guide for beginners,
                </div>
                <div className="audioTag">
                    <h2 className="title"> Extra Push</h2>

                    We're here to give you the extra push you need, from Quotes, audios to workout playlist. 
                </div>
                <div className="trackingTag">
                   <h2 className="title"> Keep track</h2>
                   Stay on track by keeping track of your daily moods,meals, adn workouts. 
                </div>
            </section>
        </div>


    )
}
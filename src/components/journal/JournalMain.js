import React from "react";
import { useHistory } from "react-router"
import "./JournalMain.css"

export const JournalMain = () => {
    const history = useHistory();
    return (
        <>
            <h1 className="homepageLogo">My GymMo Journal</h1>
            <section>
                <p className="journalOverview">
                    Hitting the gym is only ⅓ of
                    the work, your mental growth plays a role in your physical growth
                    as well. Here you will have a space to keep journal entries about
                    your mood, meals, and your workouts throughout your fitness journey!
                </p>
            </section>
            <div className="picAndList">
                <img className="journal_img" src="https://familysearch.brightspotcdn.com/dims4/default/6522c0b/2147483647/strip/true/crop/750x500+0+0/resize/1240x827!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F0c%2F53%2Fc4e64379b50657c818bde564cae6%2Fwoman-writing-on-bed.jpg" />

                <div className="journalButtons">
                    <div className="reflectionButton">
                        <p className="description"> Recognize the connection between body and mind, encouraging you to express gratitude daily, as well as monitor your mood. </p>
                        <button className="button" onClick={() => history.push('/reflection')}>Reflection</button>
                    </div>

                    <div className="mealButton">
                    <p className="description"> Use this space to track your food intake, including snacks (all healthy, obviously!). </p>

                        <button className="button" onClick={() => history.push('/meals')}>Meals</button>
                    </div>

                    <div className="workoutButton">
                    <p className="description"> Keep your head in the game by recording your workouts! Whether you’re taking classes or doing at home cardio, tracking your workouts make your purpose-driven and more efficient.   </p>

                        <button className="button" onClick={() => history.push('/workouts')}>Workout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
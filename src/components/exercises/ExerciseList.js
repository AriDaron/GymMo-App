import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllExercises } from "../ApiManager";


export const ExerciseList = () => {
    const [exercises, setExercises] = useState([])


    useEffect(
        () => {
            getAllExercises()
                .then(
                    (response) => {
                        setExercises(response)
                    }
                )
        },
        []
    )
    return (
        <>
            <h1 className="homepageLogo">GYmMo Tutorials</h1>
            {
                exercises.map(
                    (exerciseObj) => {
                        return <p key={`exercise--${exerciseObj.id}`}>
                            <div className="singleExercise">{exerciseObj.name}
                               <a href={exerciseObj.hyperlink}> <p className="exerciseLink">{exerciseObj.hyperlink}
                                </p></a>
                            </div>
                        </p>
                    }
                )
            }

        </>
    )

}

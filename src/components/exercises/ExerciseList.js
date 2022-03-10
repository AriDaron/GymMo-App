import React, { useEffect, useState } from "react";
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
            {
                exercises.map(
                    (exerciseObj) => {
                        return <p key={`exercise--${exerciseObj.id}`}><div className="singleExercise">{exerciseObj.name}{exerciseObj.hyperlink}</div></p>
                    }
                )
            }

        </>
    )

}

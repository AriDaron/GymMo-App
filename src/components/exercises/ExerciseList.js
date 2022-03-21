import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBodyPartExercises, getAllBodyParts, getAllExercises } from "../ApiManager";
import "./Exercises.css"
//export a function that will display a list of exercises and links 
export const ExerciseList = () => {
    const [exercises, setExercises] = useState([]) //track the state of exercises
    const [bodyParts, setBodyParts] = useState([]) //track the state of bodyParts

    const [selectedBodyPart, setSelectedBodyPart] = useState([]) //track state of selected body part 
    const [filteredExercises, setFilteredExercises] = useState([])
    const [bodyPartExercises, setBodyPartExercises] = useState([])
    //get all exercises, bodyparts and bodypartmatches from api 
    useEffect(
        () => {
            getAllExercises()
                .then(
                    (response) => {
                        setExercises(response)
                    }
                )
            getAllBodyParts()
                .then(
                    (response) => {
                        setBodyParts(response)
                    }
                )
            getAllBodyPartExercises()
                .then(
                    (response) => {
                        setBodyPartExercises(response)
                    }
                )
        },
        []
    )


    useEffect(
        () => {
            const filteredArray = bodyPartExercises.filter(singleBodyPartExercise => singleBodyPartExercise.bodyPartId === parseInt(selectedBodyPart))
            setFilteredExercises(filteredArray)


        },
        [selectedBodyPart]
    )

    // const showFullListOnRender = ()=>{
    //     if (!selectedBodyPart){
    // return exercises
    //     } else {

    //     }
    // }    
    return (
        <>
            <h1 className="homepageLogo">GYmMo Tutorials</h1>
            <div className="dropdownAndList">
            <select id="bodyPartDropdown"
                //onChange set a copy of the exerciseList  to exercises
                onChange={
                    (evt) => {

                        setSelectedBodyPart(evt.target.value)

                    }
                }>
                <option value="--bodyPart--">--Select a Body Part--</option>
            //then map through list of body parts to display in dropdown
                {
                    bodyParts.map(bodyPart => {
                        return <option
                            className="bodyPart"

                            value={bodyPart.id}
                            key={bodyPart.id}>{bodyPart.name}</option>
                    })
                }
            //then filter through the list exercises and if the exercise Id === the bodyPartExercise exerciseId then return html
            // create a clear button to reset setFilteredExercises(exercises) back to all exercises 
            </select>
            <div className="fullList">
                <div className="exerciseList">
                    {

                        filteredExercises.map(


                            (exerciseObj) => {
                                return <div key={`exercise--${exerciseObj.exercise.id}`}>
                                    <p className="singleExercise">{exerciseObj.exercise.name}
                                        <a href={exerciseObj.exercise.hyperlink}>{exerciseObj.exercise.hyperlink}
                                        </a>
                                    </p>
                                </div>

                            }
                        )
                    }
                </div>
            </div>
            </div>
        </>
    )

}
{/* <select id="entryMood" onChange={
    (evt) => {
        const copy = { ...journalEntry } //creates a copy of state 
        copy.mood = evt.target.value
        updateJournal(copy)
    }
}>
    <option value="⬇️ Select a mood ⬇️"> --Select a mood-- </option>
    {EntryMoodChoices.map((entryMood) => <option value= {entryMood.label}key={entryMood.label}>{entryMood.label} </option>)}
</select> */}
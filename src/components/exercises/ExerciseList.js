import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBodyPartExercises, getAllBodyParts, getAllExercises } from "../ApiManager";
import "./Exercises.css"

//export a function that will display a list of exercises and links 
export const ExerciseList = () => {
    const [exercises, setExercises] = useState([]) //track the state of exercises
    const [bodyParts, setBodyParts] = useState([]) //track the state of bodyParts

    const [selectedBodyPart, setSelectedBodyPart] = useState(0) //track state of selected body part 
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
                        setFilteredExercises(response)
                    }
                )
        },
        []
    )


    useEffect(
        () => {
            const filteredArray = bodyPartExercises.filter(singleBodyPartExercise => singleBodyPartExercise.bodyPartId === parseInt(selectedBodyPart))
            setFilteredExercises(filteredArray)

            if (parseInt(selectedBodyPart) === 0){
                const filteredArray = bodyPartExercises.filter(singleBodyPartExercise => true)
                setFilteredExercises(filteredArray)
            }
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
                <select className="bodyPartDropdown" id="bodyPartDropdown"
                    //onChange set a copy of the exerciseList  to exercises
                    onChange={
                        (evt) => {

                            setSelectedBodyPart(evt.target.value)

                        }
                    }>
                    <option value="0">--Select a Body Part--</option>
            //then map through list of body parts to display in dropdown
                    {
                        bodyParts.map(bodyPart => {
                            return <option
                                className="bodyPart"

                                value={bodyPart.id}
                                key={bodyPart.id}>{bodyPart.name}</option>
                        })
                    }
                </select>
                <div className="picAndList">
                    <img className="goodForm_img" src="https://www.verywellfit.com/thmb/h2byH6NAVPwVxP2aNFDcj5hwSvM=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-816802320-5b1b95658e1b6e0036da9bdd.jpg" />
                    <div className="fullList">


                        <aside className="exerciseList">
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
                        </aside>

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
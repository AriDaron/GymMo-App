import React, { useEffect, useState } from "react"
import { useHistory,useParams } from "react-router";


export const WorkoutEdits = ()=>{
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { workoutId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutEntries/${parseInt(workoutId)}`)
                .then(res => res.json())
                .then((data) => {
                    setEntry(data) //sets state when data come back fro API
                })
        },
        [workoutId]  // Above function runs when the value of workoutId change 
    )

    

    const saveEditedWorkout = (evt) => {
         evt.preventDefault()
        // Construct a new object to replace the existing one in the API
        const newEntry = {
            date: entry.date,
            description: entry.description,
            timeSpent: entry.timeSpent,
            userId:entry.userId,
        }
        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/workoutEntries/${workoutId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
        .then(() => {
            history.push("/workouts")
        })

    }

    return (
        <form className="entryForm">
            <h2 className="workoutForm__title">Edit Workout Entry </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date:</label>
                    <input type="date"
                        onChange={
                            (evt) => {
                                const copy = { ...entry }
                                copy.date = evt.target.value
                                setEntry(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                    defaultValue={entry.description}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Description of Workout "
                        onChange={
                            (evt) => {
                                const copy = { ...entry } //creates a copy of state 
                                copy.description = evt.target.value
                                setEntry(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Total time working out:</label>
                    <input
                    defaultValue={entry.timeSpent}
                        required autoFocus
                        type="text"
                        className="form"
                        placeholder="Mins Spent working out "
                        onChange={
                            (evt) => {
                                const copy = { ...entry } //creates a copy of state 
                                copy.calories = evt.target.value
                                setEntry(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>

            <button onClick={saveEditedWorkout} className="btn btn-primary" >
                Submit Workout
            </button>
        </form>
    )

}
import React, { useEffect, useState } from "react"
import { useHistory,useParams } from "react-router";


export const MealEdits = ()=>{
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { mealId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    useEffect(
        () => {
            fetch(`http://localhost:8088/mealEntries/${parseInt(mealId)}`)
                .then(res => res.json())
                .then((data) => {
                    setEntry(data) //sets state when data come back fro API
                })
        },
        [mealId]  // Above function runs when the value of mealId change 
    )

    const MealTimeChoices = [
        { label: "Breakfast" },
        { label: "Lunch" },
        { label: "Snack" },
        { label: "Dinner" }
    ]

    const saveEditedMeal = (evt) => {
         evt.preventDefault()
        // Construct a new object to replace the existing one in the API
        const newEntry = {
            date: entry.date,
            mealTime: entry.mealTime,
            description: entry.description,
            calories: entry.calories,
            userId:entry.userId,
        }
        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/mealEntries/${mealId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
        .then(() => {
            history.push("/meals")
        })

    }

    return (
        <form className="entryForm">
            <h2 className="mealForm__title">Edit Meal Entry </h2>
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
            <div>
               
                <br />
                <select id="mealTime" onChange={
                            (evt) => {
                                const copy = { ...entry } //creates a copy of state 
                                copy.mealTime = evt.target.value
                                setEntry(copy)
                            }
                        }>
                <option value="⬇️ Select a meal time ⬇️"> --Select a meal time-- </option>
            {MealTimeChoices.map((mealTime) => <option key={mealTime.label}>{mealTime.label}</option>)}
                </select>
            
            
            </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                    defaultValue={entry.description}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Description of Meal "
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
                    <label htmlFor="description">Total Calories:</label>
                    <input
                    defaultValue={entry.calories}
                        required autoFocus
                        type="text"
                        className="form"
                        placeholder="Number of calories "
                        onChange={
                            (evt) => {
                                const copy = { ...entry } //creates a copy of state 
                                copy.calories = evt.target.value
                                setEntry(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>

            <button onClick={saveEditedMeal} className="btn btn-primary" >
                Submit Meal
            </button>
        </form>
    )

}
//responsible for rendering individual entrys 

import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router"

export const WorkoutEntry = () => {
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { workoutId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    //this useEffect runs only when the workoutId route param changed 
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


    const deleteEntry = () => {
        fetch(`http://localhost:8088/workoutEntries/${parseInt(workoutId)}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                setEntry(data)
            })
            .then(() => {
                history.push("/workouts") //push to browser history and take user to tickets
            })


    }



    return (
        <>
        <div className="entry">
            <h2>Entry Details </h2>
            <section className="entry">
                <div className="entry__date">Submitted on {entry.date}</div>
                <h3 className="entry__description">{entry.description}</h3>
                <button onClick={() => {
                    history.push(`/workoutEdit/${workoutId}`)
                }} className="request__edit"
                    id="request--${workoutEntries.id}">
                    Edit
                </button>
                <button onClick={deleteEntry} className="request__delete"
                    id="request--${workoutEntries.id}">
                    Delete
                </button>
            </section>
            </div>
        </>
    )
}
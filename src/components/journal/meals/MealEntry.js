//responsible for rendering individual entrys 

import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router"

export const MealEntry = () => {
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { mealId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    //this useEffect runs only when the entryId route param changed 
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


    const deleteEntry = () => {
        fetch(`http://localhost:8088/mealEntries/${parseInt(mealId)}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                setEntry(data)
            })
            .then(() => {
                history.push("/meal") //push to browser history and take user to tickets
            })


    }

    

    return (
        <>
            <h2>Entry Details </h2>
            <section className="entry">
                <div className="entry__date">Submitted on {entry.date}</div>
                <h3 className="entry__description">{entry.description}</h3>
                <button onClick={()=>{
                    history.push(`/mealEdit/${mealId}`)
                }} className="request__edit"
                    id="request--${mealEntries.id}">
                    Edit
                </button>
                <button onClick={deleteEntry} className="request__delete"
                    id="request--${mealEntries.id}">
                    Delete
                </button>
            </section>
        </>
    )
}
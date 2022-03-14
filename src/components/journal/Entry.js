//responsible for rendering individual entrys 

import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router"

export const Entry = () => {
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { journalId } = useParams()  // Variable storing the route parameter
    const history = useHistory()

    //this useEffect runs only when the entryId route param changed 
    useEffect(
        () => {
            fetch(`http://localhost:8088/journalEntries/${parseInt(journalId)}`)
                .then(res => res.json())
                .then((data) => {
                    setEntry(data) //sets state when data come back fro API
                })
        },
        [journalId]  // Above function runs when the value of journalId change 
    )


    const deleteEntry = () => {
        fetch(`http://localhost:8088/journalEntries/${parseInt(journalId)}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                setEntry(data)
            })
            .then(() => {
                history.push("/journal") //push to browser history and take user to tickets
            })


    }

    const editedEntry = (evt) => {
        
        // Construct a new object to replace the existing one in the API
        const newEntry = {
            date: entry.date,
            mood: entry.mood,
            description: entry.description,
            userId:entry.userId,
        }
        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/journalEntries/${journalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
        .then(() => {
            history.push("/journal")
        })

    }

    return (
        <>
            <h2>Entry Details </h2>
            <section className="entry">
                <div className="entry__date">Submitted on {entry.date}</div>
                <h3 className="entry__description">{entry.description}</h3>
                <button onClick={editedEntry} className="request__edit"
                    id="request--${journalEntries.id}">
                    Edit
                </button>
                <button onClick={deleteEntry} className="request__delete"
                    id="request--${journalEntries.id}">
                    Delete
                </button>
            </section>
        </>
    )
}
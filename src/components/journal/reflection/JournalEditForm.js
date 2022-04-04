import React, { useEffect, useState } from "react"
import { useHistory,useParams } from "react-router";


export const JournalEdits = ()=>{
    const [entry, setEntry] = useState({})  // State variable for current entry object
    const { journalId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


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

    const EntryMoodChoices = [
        { label: "Energized" },
        { label: "Sore" },
        { label: "Pain" },
        { label: "Over It" },
        { label: "Other" }
    ]

    const saveEditedEntry = (evt) => {
         evt.preventDefault()
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
            history.push("/reflection")
        })

    }

    return (
        <form className="entryForm">
            <h2 className="ticketForm__title">New Journal Entry </h2>
            <fieldset>
                <div className="form-group">
                    <label  className="Form" htmlFor="name">Date:</label>
                    <input type="date"
                        onChange={
                            (evt) => {
                                const copy = { ...entry }
                                copy.date = evt.target.value
                                setEntry(copy)
                            }
                        } />
                </div>
                <label className="Form" htmlFor="mood">Mood:</label>
            <select id="entryMood" onChange={
                (evt) => {
                    const copy = { ...entry } //creates a copy of state 
                    copy.mood = evt.target.value
                    setEntry(copy)
                }
            }>
                <option value="⬇️ Select a mood ⬇️"> --Select a mood-- </option>
                {EntryMoodChoices.map((entryMood) => <option value= {entryMood.label}key={entryMood.label}>{entryMood.label} </option>)}
            </select>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="Form" htmlFor="description">Reflection:</label>
                    <textarea
                    defaultValue={entry.description}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How are you feeling? "
                        onChange={
                            (evt) => {
                                const copy = { ...entry } //creates a copy of state 
                                copy.description = evt.target.value
                                setEntry(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>


            <button onClick={saveEditedEntry} className="btn btn-primary" >
                Submit Journal
            </button>
        </form>
    )

}
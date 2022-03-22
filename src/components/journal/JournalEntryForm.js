import React, { useState } from "react"
import { useHistory } from "react-router";
import "./MoodJournal.css"

export const JournalEntryForm = () => {

    const [mood, updateMood] = useState([])
    const [journalEntry, updateJournal] = useState({
        date: 0,
        mood:"",
        description: "",
        userId: 1


    });

    const EntryMoodChoices = [
        { label: "Energized" },
        { label: "Sore" },
        { label: "Pain" },
        { label: "Over It" },
        { label: "Other" }
    ]
    const SaveMood = (evt) => {
        updateMood(evt.target.value)
    }

    const history = useHistory()

    // below is the object that we want to send to our API
    const saveJournal = (event) => {
        event.preventDefault()

        const newJournal = {
            date: journalEntry.date,
            mood: journalEntry.mood,
            description: journalEntry.description,
            userId: parseInt(localStorage.getItem("gymMo_user"))


        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournal)   //send body of the request can only send strings so must strigify 
        }
        return fetch("http://localhost:8088/journalEntries", fetchOption)
            .then(() => {
                history.push("/journal") //push to browser history and take user to journal list 
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
                                const copy = { ...journalEntry }
                                copy.date = evt.target.value
                                updateJournal(copy)
                            }
                        } />
                </div>
                <label className="Form" htmlFor="mood">Mood:</label>
            <select id="entryMood" onChange={
                (evt) => {
                    const copy = { ...journalEntry } //creates a copy of state 
                    copy.mood = evt.target.value
                    updateJournal(copy)
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
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How are you feeling? "
                        onChange={
                            (evt) => {
                                const copy = { ...journalEntry } //creates a copy of state 
                                copy.description = evt.target.value
                                updateJournal(copy) //make the copy the new state 
                            }
                        } />
                </div>
            </fieldset>


            <button onClick={saveJournal} className="btn btn-primary" >
                Submit Journal
            </button>
        </form>
    )
}

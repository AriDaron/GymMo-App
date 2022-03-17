import React, { useState } from "react"
import { useHistory } from "react-router";


export const JournalEditForm = () => {

    const [mood, updateMood] = useState([])
    const [journalEdit, updateJournalEdit] = useState({
        date: 0,
        mood:"",
        description: "",
        userId: 1


    });

    const EditMoodChoices = [
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
         // Construct a new object to replace the existing one in the API
         const editedEntry = {
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
            body: JSON.stringify(editedEntry)
        })
        .then(() => {
            history.push("/journal")
        })

        }


        // const fetchOption = {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newJournal)   //send body of the request can only send strings so must strigify 
        // }
        // return fetch("http://localhost:8088/journalEntries/${journalId}", fetchOption)
        //     .then(() => {
        //         history.push("/journal") //push to browser history and take user to journal list 
        //     })}
    

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Journal Edit </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date:</label>
                    <input type="date"
                        onChange={
                            (evt) => {
                                const copy = { ...journalEdit }
                                copy.date = evt.target.value
                                updateJournalEdit(copy)
                            }
                        } />
                </div>
                <label htmlFor="mood">Mood:</label>
            <select id="editMood" onChange={
                (evt) => {
                    const copy = { ...journalEdit } //creates a copy of state 
                    copy.mood = evt.target.value
                    updateJournal(copy)
                }
            }>
                <option value="⬇️ Select a mood ⬇️"> --Select a mood-- </option>
                {EditMoodChoices.map((editMood) => <option value= {editMood.label}key={editMood.label}>{editMood.label} </option>)}
            </select>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Reflection:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How are you feeling? "
                        onChange={
                            (evt) => {
                                const copy = { ...journalEdit } //creates a copy of state 
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

import userEvent from "@testing-library/user-event"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"


export const JournalList = () => {
    const [journalEntries, updatedJournal] = useState([])
    const history = useHistory()


    //useEffect() When state changes it invokes a function. like an event listener. 
    //used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 
    useEffect(
        () => {
            fetch("http://localhost:8088/journalEntries?_expand=description")
                .then(res => res.json())
                .then((data) => {
                    updatedJournal(data)
                })
        },
        // leave DEPENDANCY ARRAY EMPTY , or infinite loop  
        []
    );


    
const loggedInUser = journalEntries.filter((journalEntry)=> journalEntry.userId === parseInt(localStorage.getItem("gymMo_user")))
    return (
        // <> fragment putting all return elements into one JSX element
        <>

            <button onClick={() => history.push("/journal/create")}> Add a New Journal Entry  </button>
           

            {
                //iterate journals and convert object to JXS 
                loggedInUser.map(
                    (entry) => {
                        return <div key={`journal--${entry.id}`}> <br/> <Link to={`/journal/${entry.id}`}> {entry.date} </Link> 
                        <div>Mood: {entry.mood}</div>
                        Reflection: {entry.description}. 
                       
                        
                        </div>
                    }
                )
            }
        </>
    )
}

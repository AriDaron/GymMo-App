import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import "./Workout.css"

export const WorkoutList = () => {
    const [workoutEntries, updatedWorkouts] = useState([])
    const [active, setActive] = useState("")
    const history= useHistory()
    //useEffect() When state changes it invokes a function. like an event listener. 
    //used to watch specific state variables and define logic that should run when that state changes 
    //go get data from API and pull it into application state with fetch 
    useEffect(
        () => {
            fetch("http://localhost:8088/workoutEntries?_expand=description")
                .then(res => res.json())
                .then((data) => {
                    updatedWorkouts(data)
                })
        },
        // leave DEPENDANCY ARRAY EMPTY , or infinite loop  
        []
    )
    const loggedInUser = workoutEntries.filter((workoutEntry)=> workoutEntry.userId === parseInt(localStorage.getItem("gymMo_user")))
    return (
        // <> fragment putting all return elements into one JSX elemne t
        <>
        <h1 className="homepageLogo">My Workout Journal</h1>
       <div className="workoutList">
            <button onClick={()=> history.push("/workouts/create")}> Add a New Workout  </button>
            {active}
            {
                //iterate workouts and convert object to JXS 
                loggedInUser.map(
                    (workoutObj) => {
                        return <div key= {`workout--${workoutObj.id}`} className="singleJournal"> <br/> <Link to={`/workouts/${workoutObj.id}`}> {workoutObj.date} </Link>
                        <div> Total time spent working out: {workoutObj.timeSpent} mins.  </div>
                        </div>
                    }
                )
            }
            </div>
        </>
    )
}
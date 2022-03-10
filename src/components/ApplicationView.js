import React from "react";
import { Route } from "react-router-dom"
import { Login } from "./auth/Login";
import { ExerciseList } from "./exercises/ExerciseList";
import { JournalEntryForm } from "./journal/JournalEntryForm";
import { JournalList } from "./journal/JournalList";





export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/exercises">
                <ExerciseList />
            </Route>

            <Route exact path="/journal">
                <JournalList />
            </Route>
            <Route exact path="/journal/create">
                <JournalEntryForm />
            </Route>
        </>
    )

}
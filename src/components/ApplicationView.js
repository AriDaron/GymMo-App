import React from "react";
import { Route } from "react-router-dom"
import { AudioList } from "./audio/AudioList";
import { Login } from "./auth/Login";
import { ExerciseList } from "./exercises/ExerciseList";
import { HomePage } from "./home/HomePage";
import { Entry } from "./journal/Entry";
import { JournalEntryForm } from "./journal/JournalEntryForm";
import { JournalList } from "./journal/JournalList";





export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/exercises">
                <ExerciseList />
            </Route>
            <Route exact path="/audios">
                <AudioList />
            </Route>

            <Route exact path="/journal">
                <JournalList />
            </Route>
            <Route exact path="/journal/create">
                <JournalEntryForm />
            </Route>
            <Route exact path="/journal/:journalId(\d+)">
                <Entry/>
            </Route>
        </>
    )

}
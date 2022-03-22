import React from "react";
import { Route } from "react-router-dom"
import { AudioList } from "./audio/AudioList";
import { Login } from "./auth/Login";
import { ExerciseList } from "./exercises/ExerciseList";
import { HomePage } from "./home/HomePage";
import { Entry } from "./journal/Entry";
import { JournalEntryForm } from "./journal/JournalEntryForm";
import { JournalList } from "./journal/JournalList";
import { MealEntryList } from "./journal/meals/MealList";
import { NewMealForm } from "./journal/meals/NewMealEntry";
import { NewWorkoutForm } from "./journal/workouts/NewWorkoutEntry";
import { WorkoutList } from "./journal/workouts/WorkoutList";





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
            <Route exact path="/meals">
                <MealEntryList />
            </Route>
            <Route exact path="/meals/create">
                <NewMealForm />
            </Route>
            <Route exact path="/workouts">
                <WorkoutList/>
            </Route>
            <Route exact path="/workouts/create">
                <NewWorkoutForm/>
            </Route>
        </>
    )

}
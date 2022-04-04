import React from "react";
import { Route } from "react-router-dom"
import { AudioList } from "./audio/AudioList";
import { Login } from "./auth/Login";
import { ExerciseList } from "./exercises/ExerciseList";
import { HomePage } from "./home/HomePage";
import { Entry } from "./journal/reflection/Entry";
import { JournalEdits } from "./journal/reflection/JournalEditForm";
import { JournalEntryForm } from "./journal/reflection/JournalEntryForm";
import { JournalList } from "./journal/reflection/JournalList";
import { MealEdits } from "./journal/meals/mealEditForm";
import { MealEntry } from "./journal/meals/MealEntry";
import { MealEntryList } from "./journal/meals/MealList";
import { NewMealForm } from "./journal/meals/NewMealEntry";
import { NewWorkoutForm } from "./journal/workouts/NewWorkoutEntry";
import { WorkoutEdits } from "./journal/workouts/WorkoutEditForm";
import { WorkoutEntry } from "./journal/workouts/WorkoutEntry";
import { WorkoutList } from "./journal/workouts/WorkoutList";
import { JournalMain } from "./journal/JournalMain";





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
                <JournalMain />
            </Route>
            <Route exact path="/reflection">
                <JournalList />
            </Route>
            <Route exact path="/reflection/create">
                <JournalEntryForm />
            </Route>
            <Route exact path="/reflection/:journalId(\d+)">
                <Entry />
            </Route>
            <Route exact path="/reflectionEdit/:journalId(\d+)">
                <JournalEdits />
            </Route>
            <Route exact path="/meals">
                <MealEntryList />
            </Route>
            <Route exact path="/meals/create">
                <NewMealForm />
            </Route>
            <Route exact path="/meals/:mealId(\d+)">
                <MealEntry />
            </Route>
            <Route exact path="/mealEdit/:mealId(\d+)">
                <MealEdits />
            </Route>
            <Route exact path="/workouts">
                <WorkoutList />
            </Route>
            <Route exact path="/workouts/create">
                <NewWorkoutForm />
                </Route>
                <Route exact path="/workouts/:workoutId(\d+)">
                    <WorkoutEntry />
                </Route>
                <Route exact path="/workoutEdit/:workoutId(\d+)">
                    <WorkoutEdits />
                </Route>
            
        </>
    )

}
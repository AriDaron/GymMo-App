export const getAllExercises = ()=>{
    return fetch ("http://localhost:8088/exercises")
    .then( res=>res.json())
}
export const getAllAudios = ()=>{
    return fetch ("http://localhost:8088/MoAudios")
    .then( res=>res.json())
}
export const getAllEntryMoods = ()=>{
    return fetch ("http://localhost:8088/entryMood")
    .then( res=>res.json())
}
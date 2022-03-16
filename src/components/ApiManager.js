export const getAllExercises = ()=>{
    return fetch ("http://localhost:8088/exercises")
    .then( res=>res.json())
}
export const getAllAudios = ()=>{
    return fetch ("http://localhost:8088/moAudios")
    .then( res=>res.json())
}
export const getAllEntryMoods = ()=>{
    return fetch ("http://localhost:8088/entryMood")
    .then( res=>res.json())
}
export const getAllBodyParts = ()=>{
    return fetch ("http://localhost:8088/bodyParts")
    .then( res=>res.json())
}
export const getAllBodyPartExercises = ()=>{
    return fetch ("http://localhost:8088/bodyPartExercises?_expand=exercise")
    .then( res=>res.json())
}
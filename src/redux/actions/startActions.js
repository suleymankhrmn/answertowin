import * as actionTypes from "./actionTypes"

export function increaseDifficultyLevel(level){
    console.log("geldi action dayım")
    return{
        
        type:actionTypes.INCREASE_DIFFICULTY_LEVEL,
        payload:level
    }
}
export function decreaseDifficultyLevel(level){
    return{
        type:actionTypes.DICREASE_DIFFICULTY_LEVEL,
        payload:level
    }
}
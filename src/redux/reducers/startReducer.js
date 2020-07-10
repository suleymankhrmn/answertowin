import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function startReducer(state=initialState.difficultyLevel,action){
    switch(action.type){
        case actionTypes.INCREASE_DIFFICULTY_LEVEL:
            console.log("geldi")
            var difItem = action.payload
            console.log("state kontrol")
            console.log(difItem)
            for(var level in difItem){
                if(difItem[level] == 0){
                    difItem[level] = 25
                    break                   
                }               
            }
            let newitem={
                "Beginner":difItem["Beginner"],"Medium":difItem["Medium"],"Hard":difItem["Hard"],"VeryHard":difItem["VeryHard"]
            }

            console.log("newState kullanımı")
            console.log(difItem)           
            return newitem
        
        case actionTypes.DICREASE_DIFFICULTY_LEVEL:
            var array = []
            var diffItem = action.payload

            console.log("gelen state")
            console.log(diffItem)
            for (var level in diffItem){
                array.push(level)
            }
            console.log("reverse array")
            console.log(array.reverse())

            for (var item in array){
                console.log("array item")
                console.log(array.reverse()[item])
                if(diffItem[array.reverse()[item]] > 0){
                    console.log("decrease alanı")
                    console.log(diffItem[array.reverse()[item]])
                    diffItem[array.reverse()[item]] = 0
                    break
                }
            }
            console.log("diffitem kontrol")
            console.log(diffItem)
            let newItem={
                "Beginner":diffItem["Beginner"],"Medium":diffItem["Medium"],"Hard":diffItem["Hard"],"VeryHard":diffItem["VeryHard"]
            }
            return newItem
        default:
            return state
            
    }
}
import { combineReducers } from "redux";
import {CHANGE_TO_BLACK, CHANGE_TO_RED, CHANGE_TO_COLOR} from "./type";

const initialState = {
    number: 5,
}

// r g b
const initialColorState = {
    color: "#FF33ff"
}



const colorReducer = (state=initialColorState, action) =>{

    switch(action.type){
        case CHANGE_TO_BLACK:{
            const newState = {...state};
            newState.color = "black";
            return newState;
        }
        case CHANGE_TO_RED:{
            const newState = {...state};
            newState.color = "red";
            return newState;
        }
        case CHANGE_TO_COLOR:{
            const newState = {...state};
            newState.color = action.payload;
            return newState;
        }
        default:
            return state;
    }


}



//root reducer

// чистая функция
// нет сайд-эффектов
const reducer = (state=initialState, action) => {
    switch(action.type){
        case "INCREASE_NUMBER":{
            const newState = {...state};
            newState.number = newState.number + action.payload;
            return newState;
        }
        case "DECREASE_NUMBER": {
            const newState =  {...state};
            newState.number =  newState.number - action.payload;
            return newState;
        }

        

        default:{
            return state;
        }
    }

} 


export const rootReducer = combineReducers({numberReducer: reducer, colorReducer})